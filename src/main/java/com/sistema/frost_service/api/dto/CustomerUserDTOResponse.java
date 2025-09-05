package com.sistema.frost_service.api.dto;

import com.sistema.frost_service.domain.enums.GENDER;
import com.sistema.frost_service.domain.enums.USERTYPE;

public class CustomerUserDTOResponse {

    private String email;

    private String firstName;

    private String lastName;

    private GENDER gender;

    private String cpf;

    private USERTYPE usertype;

    public USERTYPE getUsertype() {
        return usertype;
    }

    public void setUsertype(USERTYPE usertype) {
        this.usertype = usertype;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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
