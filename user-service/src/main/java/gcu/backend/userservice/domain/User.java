package gcu.backend.userservice.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@SuppressWarnings("JpaDataSourceORMInspection")
@Data
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
public class User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Id
    private String mail;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "age", nullable = false)
    private Integer age;
    @Builder
    public User(String name, String mail, Integer age, String password) {
        this.name = name;
        this.mail = mail;
        this.age = age;
        this.password = password;
    }
}
