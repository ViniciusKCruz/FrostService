package com.sistema.frost_service.api.dto;

import com.sistema.frost_service.domain.enums.GENDER;
import com.sistema.frost_service.domain.enums.USERTYPE;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CustomerUserDTORequest {

    @Email
    @Column(name = "email", unique = true, nullable = false)
    @NotBlank(message = "E-mail cannot be empty!")
    private String email;

    @NotBlank(message = "First's name cannot be empty!")
    @Column(nullable = false, name = "firsts_name")
    private String firstName;

    @NotBlank(message = "Last's name cannot be empty!")
    @Column(nullable = false, name = "lasts_name")
    private String lastName;

    @Column(name = "cpf", nullable = false, unique = true)
    @NotBlank(message = "CPF cannot be empty")
    private String cpf;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Gender cannot be empty!")
    private GENDER gender;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @NotNull(message = "User type cannot be empty!")
    private USERTYPE usertype;

    @Column(nullable = false)
    private String salt;

    @NotBlank(message = "Password cannot be empty!")
    @Column(nullable = false)
    private String passwordHash;

    public USERTYPE getUsertype() {
        return usertype;
    }

    public void setUsertype(USERTYPE usertype) {
        this.usertype = usertype;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public GENDER getGender() {
        return gender;
    }

    public void setGender(GENDER gender) {
        this.gender = gender;
    }
}
