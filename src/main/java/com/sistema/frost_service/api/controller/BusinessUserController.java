package com.sistema.frost_service.api.controller;


import com.sistema.frost_service.api.dto.BusinessUserDTORequest;
import com.sistema.frost_service.api.dto.BusinessUserDTOResponse;
import com.sistema.frost_service.application.service.BusinessUserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/business-users")
public class BusinessUserController {

    private final BusinessUserService businessUserService;

    public BusinessUserController(BusinessUserService businessUserService) {
        this.businessUserService = businessUserService;
    }

    @PostMapping
    public ResponseEntity<BusinessUserDTOResponse> addBusinessUser(@RequestBody @Valid BusinessUserDTORequest businessUserDTORequest) {
        BusinessUserDTOResponse businessUser = businessUserService.addBusinessUser(businessUserDTORequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(businessUser);
    }

    @GetMapping
    public ResponseEntity<List<BusinessUserDTOResponse>> findAllBusinessUser() {
        List<BusinessUserDTOResponse> businessUserDTOResponses = businessUserService.findAllBusinessUsers();
        return ResponseEntity.ok(businessUserDTOResponses);
    }

}
