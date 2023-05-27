package gcu.backend.userservice;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    final
    UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @CrossOrigin("http://localhost:3000")
    @PostMapping("/api/user")
    public String create(@RequestBody User user) {
        userRepository.save(user);
        return "create ok";
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping("/api/user/{mail}")
    public Optional<User> show(@PathVariable("mail") String mail) {
        return userRepository.findByMail(mail);
    }

    @GetMapping("/api/users")
    public List<User> showAll() {
        return userRepository.findAll();
    }
}