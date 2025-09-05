package com.sistema.frost_service.application.formatter;

import org.springframework.stereotype.Component;

@Component
public class CNPJFormatter {

    public String toValidCNPJ(String cnpj) {
        if (cnpj == null) {
            return null;
        }

        cnpj = cnpj.replaceAll("[^0-9]", "");

        if (cnpj.length() != 14) {
            throw new IllegalArgumentException("CNPJ deve ter exatamente 14 dígitos");
        }

        return cnpj;
    }

    public String toFormatCNPJ(String cnpj) {
        if (cnpj == null || cnpj.length() != 14) {
            throw new IllegalArgumentException("CNPJ inválido para formatação");
        }

        return cnpj.replaceAll("(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2})", "$1.$2.$3/$4-$5");
    }
}