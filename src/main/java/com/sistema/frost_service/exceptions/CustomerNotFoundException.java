package com.sistema.frost_service.exceptions;

public class CustomerNotFoundException extends RuntimeException { // ❗ extends RuntimeException
    public CustomerNotFoundException(String message) {
        super(message);
    }
}