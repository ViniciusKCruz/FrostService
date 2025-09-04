package com.sistema.frost_service.application.formatter;

import java.util.ArrayList;
import java.util.List;

public class CPFFormatterTest {

    public static void main(String[] args) {

        List<String> unformatedCpfList = new ArrayList<>();

        unformatedCpfList.add("01236598745");
        unformatedCpfList.add("1237589595893489356j879879");
        unformatedCpfList.add("dsa123");

        for (String cpf : unformatedCpfList) {
            System.out.println("CPF sem estar formatado: " + cpf);
        }

        for (String cpf : unformatedCpfList) {
            String formatedCpf = CPFFormatter.toValidCPF(cpf);
            System.out.println("CNPJ formatado: " + formatedCpf);
        }

    }


}
