package com.sistema.frost_service.api.controller;

import com.sistema.frost_service.api.dto.CustomerUserDTORequest;
import com.sistema.frost_service.api.dto.CustomerUserDTOResponse;
import com.sistema.frost_service.application.service.CustomerUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer-users")
public class CustomerUserController {

    private final CustomerUserService customerUserService;

    private CustomerUserController(CustomerUserService customerUserService) {
        this.customerUserService = customerUserService;
    }

    @PostMapping
    public ResponseEntity<CustomerUserDTOResponse> addCustomerUser(@RequestBody CustomerUserDTORequest customerUserDTORequest) {
        CustomerUserDTOResponse customers = customerUserService.addUser(customerUserDTORequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(customers);
    }

}
