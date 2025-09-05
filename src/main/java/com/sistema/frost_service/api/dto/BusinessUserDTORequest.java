package com.sistema.frost_service.api.dto;

import com.sistema.frost_service.domain.enums.USERTYPE;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

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

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @NotNull(message = "User type cannot be empty!")
    private USERTYPE usertype;

    @Column(nullable = false)
    private String salt;

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
