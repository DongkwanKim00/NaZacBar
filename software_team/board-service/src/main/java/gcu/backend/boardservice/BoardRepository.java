package gcu.backend.boardservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "board", path="board")
public interface BoardRepository extends JpaRepository<Board, Long>, CrudRepository<Board, Long> {
    List<Board> findAllById(@Param("id") Long id);
}