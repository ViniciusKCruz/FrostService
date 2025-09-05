package com.sistema.frost_service.application.formatter;

import java.util.ArrayList;
import java.util.List;

public class CNPJFormatterTest {

    public static void main(String[] args) {


        List<String> unformatedCnpjList = new ArrayList<>();
        unformatedCnpjList.add("00623904000173");
        unformatedCnpjList.add("1237589595893489356879879");
        unformatedCnpjList.add("dsa123");

        for (String cnpj : unformatedCnpjList) {
            String formatedCnpj = CNPJFormatter.toValidCNPJ(cnpj);
            if (formatedCnpj != null) {
                System.out.println("CNPJ formatado: " + formatedCnpj);

            } else {
                System.out.println("CNPJ sem estar formatado: " + cnpj);
            }
        }

    }


}
