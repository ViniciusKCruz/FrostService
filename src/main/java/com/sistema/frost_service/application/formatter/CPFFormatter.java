package com.sistema.frost_service.application.formatter;

public class CPFFormatter {

    public static String toValidCPF(String cpf) {
        if (cpf.length() != 11) {
            return null;
        }
        cpf = cpf.replaceAll("[^0-9]", "").trim();
        return cpf.replaceAll("(\\d{3})(\\d{3})(\\d{3})(\\d{2})", "$1.$2.$3-$4");
    }
}


