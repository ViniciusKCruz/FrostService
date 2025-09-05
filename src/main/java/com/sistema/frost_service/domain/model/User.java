package com.sistema.frost_service.domain.model;

import com.sistema.frost_service.domain.enums.USERTYPE;
import com.sistema.frost_service.security.SimpleHash;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "users")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email
    @Column(name = "email", unique = true, nullable = false)
    @NotBlank(message = "E-mail cannot be empty!")
    private String email;

    @NotBlank(message = "Password cannot be empty!")
    @Column(nullable = false)
    private String passwordHash;

    @Column(nullable = false)
    private String salt;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @NotNull(message = "User type cannot be empty!")
    private USERTYPE usertype;

    public boolean checkPassword(String rawPassword) {
        return SimpleHash.matches(rawPassword, this.salt, this.passwordHash);
    }

    public User(Long id, String email, String passwordHash, USERTYPE usertype) {
        this.id = id;
        this.email = email;
        this.passwordHash = passwordHash;
        this.usertype = usertype;
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public USERTYPE getUsertype() {
        return usertype;
    }

    public void setUsertype(USERTYPE usertype) {
        this.usertype = usertype;
    }
}
