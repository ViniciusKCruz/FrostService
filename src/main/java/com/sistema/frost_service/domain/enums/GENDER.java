package com.sistema.frost_service.domain.enums;

public enum GENDER {

    MASCULINO("Masculino"),

    FEMININO("Feminino"),

    OUTRO("Outro");

    private final String description;

    GENDER(String description) {
        this.description = description;
    }

    public String getDescription() {
        return this.description;
    }
}
