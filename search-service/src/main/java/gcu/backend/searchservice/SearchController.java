package gcu.backend.searchservice;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3000")
@RestController
@EnableJpaAuditing
public class SearchController {
    @Autowired
    private final SearchRepository searchRepository;
    public SearchController(SearchRepository searchRepository) {
        this.searchRepository = searchRepository;

        String uploadDir = "uploads";
        Path uploadPath = Paths.get(uploadDir).toAbsolutePath().normalize();
        try {
            Files.createDirectories(uploadPath);
        } catch (IOException ex) {
            throw new RuntimeException("이미지 업로드 디렉토리를 생성할 수 없습니다.", ex);
        }
    }

    @PostMapping("/api/search")
    public String create(@RequestParam("title") String title,
                         @RequestParam("author") String author,
                         @RequestParam("content") String content,
                         @RequestParam("category") String category,
                         @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {
        Search search = new Search();
        search.setTitle(title);
        search.setAuthor(author);
        search.setContent(content);
        search.setCategory(category);

        if (image != null && !image.isEmpty()) {
            String fileName = StringUtils.cleanPath(image.getOriginalFilename());
            Path uploadDir = Path.of("uploads");
            Files.createDirectories(uploadDir);
            Path filePath = uploadDir.resolve(fileName);
            Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
            search.setImage(filePath.toString());
        }

        searchRepository.save(search);
        return "search create ok";
    }


    @GetMapping("/api/search")
    public List<Search> getAllSearch() {
        return searchRepository.findAll();
    }

    @GetMapping("/api/search/{id}")
    public ResponseEntity<?> getSearchId(@PathVariable("id") Long id) {
        Optional<Search> optionalSearch = searchRepository.findById(id);
        if (optionalSearch.isPresent()) {
            Search search = optionalSearch.get();
            // 게시글 데이터를 반환하는 코드
            return ResponseEntity.ok(search);
        } else {
            // 게시글이 없는 경우 NoPage로 리다이렉트하는 코드
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NoPage");
        }
    }

    @PostMapping("/api/search/recommendation")
    public String recommendSearch(@RequestBody RecommendationRequest request) {
        Long postId = request.getPostId();
        Optional<Search> optionalSearch = searchRepository.findById(postId);
        if (optionalSearch.isPresent()) {
            Search search = optionalSearch.get();
            search.setRecommendation(search.getRecommendation() + 1);
            searchRepository.save(search);
            return "Search recommendation updated";
        } else {
            return "Search not found";
        }
    }

    @GetMapping("/api/search/ranked")
    public List<Search> getRankedSearch() {
        Sort sort = Sort.by(Sort.Direction.DESC, "recommendation");
        return searchRepository.findAll(sort);
    }

    @GetMapping("/api/search/image/{id}")
    public ResponseEntity<Resource> getSearchImage(@PathVariable("id") Long id) throws IOException {
        Optional<Search> optionalSearch = searchRepository.findById(id);
        if (optionalSearch.isPresent()) {
            Search search = optionalSearch.get();
            Path imagePath = Path.of(search.getImage());
            Resource imageResource = new UrlResource(imagePath.toUri());
            if (imageResource.exists()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG) // 이미지 타입에 맞게 설정
                        .body(imageResource);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/api/search/{id}")
    public ResponseEntity<String> updateSearch(
            @PathVariable("id") Long id,
            @RequestBody Search updatedSearch
    ) {
        Optional<Search> optionalSearch = searchRepository.findById(id);
        if (optionalSearch.isPresent()) {
            Search search = optionalSearch.get();
            search.setTitle(updatedSearch.getTitle());
            search.setContent(updatedSearch.getContent());
            searchRepository.save(search);
            return ResponseEntity.ok("Search updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/api/search/{id}")
    public String deleteSearch(@PathVariable("id") Long id) {
        Optional<Search> optionalSearch = searchRepository.findById(id);
        if (optionalSearch.isPresent()) {
            Search search = optionalSearch.get();

            // Delete the associated image file if it exists
            if (search.getImage() != null) {
                Path imagePath = Path.of(search.getImage());
                try {
                    Files.deleteIfExists(imagePath);
                } catch (IOException ex) {
                    throw new RuntimeException("Failed to delete the image file.", ex);
                }
            }

            searchRepository.delete(search);
            return "Search deleted successfully";
        } else {
            return "Search not found";
        }
    }


}

