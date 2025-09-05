package com.sistema.frost_service.domain.model;

import com.sistema.frost_service.domain.enums.GENDER;
import com.sistema.frost_service.domain.enums.USERTYPE;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "customer_users")
public class CustomerUser extends User {

    @NotBlank(message = "First's name cannot be empty!")
    @Column(nullable = false, name = "firsts_name")
    private String firstName;

    @NotBlank(message = "Last's name cannot be empty!")
    @Column(nullable = false, name = "lasts_name")
    private String lastName;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Gender cannot be empty!")
    private GENDER gender;

    @Column(name = "cpf", nullable = false, unique = true)
    @NotBlank(message = "CPF cannot be empty")
    private String cpf;

    public CustomerUser(Long id, String email, String passwordHash, USERTYPE usertype, String firstName, String lastName, GENDER gender, String cpf) {
        super(id, email, passwordHash, usertype);
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.cpf = cpf;
    }

    public CustomerUser() {
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

    public GENDER getGender() {
        return gender;
    }

    public void setGender(GENDER gender) {
        this.gender = gender;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
