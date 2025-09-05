package com.sistema.frost_service.application.formatter;

import org.springframework.stereotype.Component;

@Component
public class CPFFormatter {

    public String toValidCPF(String cpf) {
        if (cpf == null) {
            return null;
        }

        cpf = cpf.replaceAll("[^0-9]", "");

        if (cpf.length() != 11) {
            throw new IllegalArgumentException("CPF deve ter exatamente 11 dígitos");
        }

        return cpf;
    }

    public String toFormatCPF(String cpf) {
        if (cpf == null || cpf.length() != 11) {
            throw new IllegalArgumentException("CPF inválido para formatação");
        }

        return cpf.replaceAll("(\\d{3})(\\d{3})(\\d{3})(\\d{2})", "$1.$2.$3-$4");
    }
}
