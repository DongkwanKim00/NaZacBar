package gcu.backend.chatservice;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ChatController {
    final ChatRepository chatRepository;
    public ChatController(ChatRepository chatRepository) {
        this.chatRepository = chatRepository;
    }
    @CrossOrigin("http://localhost:3000")
    @PostMapping("/api/chat")
    public String create(@RequestBody Chat chat) {
        chatRepository.save(chat);
        return "create ok";
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping("/api/chat/{category}")
    public List<Chat> show(@PathVariable("category") String category) {
        return chatRepository.findByCategory(category);
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping("/api/chat")
    public List<Chat> showAll() {
        return chatRepository.findAll();
    }
}