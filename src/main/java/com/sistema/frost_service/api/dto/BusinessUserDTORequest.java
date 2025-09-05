package com.sistema.frost_service.api.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class BusinessUserDTORequest {

    @Email
    @Column(name = "email", unique = true, nullable = false)
    @NotBlank(message = "E-mail cannot be empty!")
    private String email;

    @Column(name = "cnpj", nullable = false, unique = true)
    @NotBlank(message = "CNPJ cannot be empty")
    private String cnpj;

    @Column(nullable = false)
    @NotBlank(message = "Legal name cannot be empty")
    private String legalName;

    @Column(nullable = false)
    @NotBlank(message = "Trade name cannot be empty")
    private String tradeName;

    @NotBlank(message = "Password cannot be empty!")
    @Column(nullable = false)
    private String passwordHash;

    @Column(nullable = false)
    private String salt;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getLegalName() {
        return legalName;
    }

    public void setLegalName(String legalName) {
        this.legalName = legalName;
    }

    public String getTradeName() {
        return tradeName;
    }

    public void setTradeName(String tradeName) {
        this.tradeName = tradeName;
    }
}
