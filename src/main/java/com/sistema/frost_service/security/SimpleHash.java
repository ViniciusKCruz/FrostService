package com.sistema.frost_service.security;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

public class SimpleHash {

    private static final SecureRandom random = new SecureRandom();

    // Gera salt aleatório
    public static String generateSalt() {
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        return Base64.getEncoder().encodeToString(salt);
    }

    // Gera hash da senha com salt
    public static String hashPassword(String password, String salt) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(salt.getBytes());
            byte[] hashed = md.digest(password.getBytes());
            return Base64.getEncoder().encodeToString(hashed);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Error hashing password", e);
        }
    }

    // Verifica se a senha bate
    public static boolean matches(String rawPassword, String salt, String hashedPassword) {
        return hashPassword(rawPassword, salt).equals(hashedPassword);
    }
}

