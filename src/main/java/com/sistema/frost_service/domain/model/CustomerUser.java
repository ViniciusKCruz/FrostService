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
    private String first_Name;

    @NotBlank(message = "Last's name cannot be empty!")
    @Column(nullable = false, name = "lasts_name")
    private String last_Name;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Gender cannot be empty!")
    private GENDER gender;

    @Column(name = "cpf", nullable = false, unique = true)
    @NotBlank(message = "CPF cannot be empty")
    private String cpf;

    public CustomerUser(Long id, String email, String passwordHash, USERTYPE usertype, String first_Name, String last_Name, GENDER gender, String cpf) {
        super(id, email, passwordHash, usertype);
        this.first_Name = first_Name;
        this.last_Name = last_Name;
        this.gender = gender;
        this.cpf = cpf;
    }

    public CustomerUser() {
    }

    public String getFirst_Name() {
        return first_Name;
    }

    public void setFirst_Name(String first_Name) {
        this.first_Name = first_Name;
    }

    public String getLast_Name() {
        return last_Name;
    }

    public void setLast_Name(String last_Name) {
        this.last_Name = last_Name;
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
