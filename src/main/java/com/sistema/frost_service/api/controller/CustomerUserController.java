package com.sistema.frost_service.api.controller;

import com.sistema.frost_service.api.dto.CustomerUserDTORequest;
import com.sistema.frost_service.api.dto.CustomerUserDTOResponse;
import com.sistema.frost_service.application.service.CustomerUserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer-users")
public class CustomerUserController {

    private final CustomerUserService customerUserService;

    public CustomerUserController(CustomerUserService customerUserService) {
        this.customerUserService = customerUserService;
    }

    @PostMapping
    public ResponseEntity<CustomerUserDTOResponse> addCustomerUser(@RequestBody @Valid CustomerUserDTORequest customerUserDTORequest) {
        CustomerUserDTOResponse customers = customerUserService.addUser(customerUserDTORequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(customers);
    }

    @GetMapping
    public ResponseEntity<List<CustomerUserDTOResponse>> findAllCustomerUsers() {
        List<CustomerUserDTOResponse> customers = customerUserService.findAllUsers();
        return ResponseEntity.ok(customers);
    }

}