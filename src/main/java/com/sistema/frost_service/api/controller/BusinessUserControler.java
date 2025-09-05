package com.sistema.frost_service.api.controller;


import com.sistema.frost_service.api.dto.BusinessUserDTOResponse;
import com.sistema.frost_service.api.dto.CustomerUserDTORequest;
import com.sistema.frost_service.api.dto.CustomerUserDTOResponse;
import com.sistema.frost_service.application.service.BusinessUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Business")
public class BusinessUserControler {

    private final BusinessUserService businessUserService;

    private BusinessUserControler(BusinessUserService businessUserService){
        this.businessUserService = businessUserService;
    }

    @PostMapping("/Salvar_Business")
    public ResponseEntity<BusinessUserDTOResponse> addCustomer(@RequestBody CustomerUserDTORequest customerUserDTORequest){
        CustomerUserDTOResponse customers = businessUserService.addUser(customerUserDTORequest);
        return ResponseEntity.ok(customers);
    }
}
