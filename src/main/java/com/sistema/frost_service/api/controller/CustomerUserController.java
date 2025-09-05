package com.sistema.frost_service.api.controller;

import com.sistema.frost_service.api.dto.CustomerUserDTORequest;
import com.sistema.frost_service.api.dto.CustomerUserDTOResponse;
import com.sistema.frost_service.application.service.CustomerUserService;
import com.sistema.frost_service.exceptions.BusinessNotFoundException;
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
        List<CustomerUserDTOResponse> customers = customerUserService.findAllCostumerUsers();
        return ResponseEntity.status(HttpStatus.CREATED).body(customers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerUserDTOResponse> findCostumerUserById(@PathVariable Long id) {
        CustomerUserDTOResponse dto = customerUserService.findCustomerUserById(id);
        return ResponseEntity.ok(dto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerUserDTOResponse> editCustomerUser(@PathVariable("id") Long id, @RequestBody @Valid CustomerUserDTORequest customerUserDTORequest) {
        CustomerUserDTOResponse updated = customerUserService.editCustomerUser(id, customerUserDTORequest);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomerUser(@PathVariable("id") Long id) {
        try {
            customerUserService.deleteCustomerUser(id);
            return ResponseEntity.ok().build();
        } catch (BusinessNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }




}