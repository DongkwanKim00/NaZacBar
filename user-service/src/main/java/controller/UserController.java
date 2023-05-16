package controller;

import domain.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repository.UserRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    final
    UserRepository userRepository;
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @PostMapping("/api/user")
    public String create(@RequestBody User user) {
        userRepository.save(user);
        return "create ok";
    }
    @GetMapping("/api/user/{id}")
    public Optional<User> show(@PathVariable("id") Long id) {
        return userRepository.findById(id);
    }
    @GetMapping("/api/users")
    public List<User> showAll() {
        return userRepository.findAll();
    }
    @DeleteMapping("/api/user/{id}")
    public String delete(@PathVariable("id") Long id) {
        userRepository.deleteById(id);
        return "delete ok";
    }
}
