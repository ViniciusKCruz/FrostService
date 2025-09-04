package com.sistema.frost_service.application.formatter;

public class CNPJFormatter {

    public static String toValidCNPJ(String cnpj) {

        if (cnpj.length() != 14) {
            return null;
        }
        cnpj = cnpj.replaceAll("[^0-9]", "").trim();
        return cnpj.replaceAll("(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2})", "$1.$2.$3/$4-$5");
    }

}
