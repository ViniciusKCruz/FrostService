package com.sistema.frost_service.api.controller;

import com.sistema.frost_service.api.dto.CustomerUserDTORequest;
import com.sistema.frost_service.api.dto.CustomerUserDTOResponse;
import com.sistema.frost_service.api.mapper.CustomerUserMapper;
import com.sistema.frost_service.application.service.CustomerUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Customer")
public class CustomerUserController {

    private final CustomerUserService customerUserService;



    private CustomerUserController(CustomerUserService customerUserService){
        this.customerUserService = customerUserService;
    }

    @PostMapping("/Salvar_User")
    public ResponseEntity<CustomerUserDTOResponse> addCustomer(@RequestBody CustomerUserDTORequest customerUserDTORequest){
        CustomerUserDTOResponse customers = customerUserService.addUser(customerUserDTORequest);
    return ResponseEntity.ok(customers);
    }

}
