package gcu.backend.searchservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "search", path="search")
public interface SearchRepository extends JpaRepository<Search, Long> , CrudRepository<Search, Long>{
    List<Search> findAllById(@Param("id") Long id);
}