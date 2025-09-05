package com.sistema.frost_service.application.formatter;

import java.util.ArrayList;
import java.util.List;

public class CNPJFormatterTest {

    public static void main(String[] args) {

        CNPJFormatter cnpjFormatter = new CNPJFormatter(); // ✅ instância criada

        List<String> unformatedCnpjList = new ArrayList<>();
        unformatedCnpjList.add("00623904000173");
        unformatedCnpjList.add("1237589595893489356879879");
        unformatedCnpjList.add("dsa123");

        for (String cnpj : unformatedCnpjList) {
            try {
                String formatedCnpj = cnpjFormatter.toFormatCNPJ(cnpj); // ✅ método chamado corretamente
                System.out.println("CNPJ formatado: " + formatedCnpj);
            } catch (IllegalArgumentException e) {
                System.out.println("CNPJ inválido: " + cnpj + " - Erro: " + e.getMessage());
            }
        }
    }
}