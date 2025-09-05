package com.sistema.frost_service.domain.enums;

public enum USERTYPE {
    CUSTOMER("Cliente"),
    BUSINESS("Empresa");

    private final String description;

    USERTYPE(String description){
        this.description=description;
    }

    public String getDescription(){
        return this.description;
    }
}
