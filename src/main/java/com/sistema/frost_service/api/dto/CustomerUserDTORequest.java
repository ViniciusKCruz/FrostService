package com.sistema.frost_service.api.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class CustomerUserDTORequest {

    @Email
    @Column(name = "email", unique = true, nullable = false)
    @NotBlank(message = "E-mail cannot be empty!")
    private String email;

    @NotBlank(message = "First's name cannot be empty!")
    @Column(nullable = false, name = "firsts_name")
    private String first_Name;

    @NotBlank(message = "Last's name cannot be empty!")
    @Column(nullable = false, name = "lasts_name")
    private String last_Name;

    @Column(name = "cpf", nullable = false, unique = true)
    @NotBlank(message = "CPF cannot be empty")
    private String cpf;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
