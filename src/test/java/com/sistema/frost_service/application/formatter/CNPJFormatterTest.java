package com.sistema.frost_service.application.formatter;

public class CNPJFormatterTest {

    public static void main(String[] args) {

        String cnpj1 = "00623904000173";
        String cnpj2 = "1237589595893489356879879";
        String cnpj3 = "dsa123";

        System.out.println("CNPJ sem formato: " + cnpj1);
        System.out.println("CNPJ sem formato: " + cnpj2);
        System.out.println("CNPJ sem formato: " + cnpj3);

        String cnpjFormatado = CNPJFormatter.toValidCNPJ(cnpj1);
        System.out.println("CNPJ formatado: " + cnpjFormatado);

        cnpjFormatado = CNPJFormatter.toValidCNPJ(cnpj2);
        System.out.println("CNPJ formatado: " + cnpjFormatado);

        cnpjFormatado = CNPJFormatter.toValidCNPJ(cnpj3);
        System.out.println("CNPJ: "+cnpjFormatado);

    }


}
