package com.sistema.frost_service.application.formatter;

import java.util.Arrays;
import java.util.List;

public class CPFFormatterTest {

    public static void main(String[] args) {

        CPFFormatter cpfFormatter = new CPFFormatter(); // Criando instância manualmente

        List<String> unformattedCpfList = Arrays.asList(
                "01236598745",
                "1237589595893489356j879879",
                "dsa123"
        );

        for (String cpf : unformattedCpfList) {
            try {
                // Validação e limpeza
                String validCpf = cpfFormatter.toValidCPF(cpf);

                // Formatação
                String formattedCpf = cpfFormatter.toFormatCPF(validCpf);

                System.out.println("CPF válido e formatado: " + formattedCpf);

            } catch (IllegalArgumentException e) {
                System.out.println("CPF inválido: " + cpf + " | Erro: " + e.getMessage());
            }
        }
    }
}
