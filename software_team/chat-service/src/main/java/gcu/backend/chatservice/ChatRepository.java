package gcu.backend.chatservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource

public interface ChatRepository extends JpaRepository<Chat, Long> {

    List<Chat> findByCategory(String s);
}
