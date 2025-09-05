package com.sistema.frost_service.domain.model;

import com.sistema.frost_service.domain.enums.USERTYPE;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "business_users")
public class BusinessUser extends User {

    @Column(name = "cnpj", nullable = false, unique = true)
    @NotBlank(message = "CNPJ cannot be empty")
    private String cnpj;

    @Column(nullable = false)
    @NotBlank(message = "Legal name cannot be empty")
    private String legalName;

    @Column(nullable = false)
    @NotBlank(message = "Trade name cannot be empty")
    private String tradeName;

    public BusinessUser(Long id, String email, String passwordHash, USERTYPE usertype, String cnpj, String legalName, String tradeName) {
        super(id, email, passwordHash, usertype);
        this.cnpj = cnpj;
        this.legalName = legalName;
        this.tradeName = tradeName;
    }

    public BusinessUser() {
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
