package com.sistema.frost_service.api.dto;

import com.sistema.frost_service.domain.enums.USERTYPE;

public class BusinessUserDTOResponse {

    private String cnpj;

    private String legalName;

    private String tradeName;

    private String email;

    private USERTYPE usertype;

    public USERTYPE getUsertype() {
        return usertype;
    }

    public void setUsertype(USERTYPE usertype) {
        this.usertype = usertype;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
