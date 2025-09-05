package com.sistema.frost_service.api.controller;


import com.sistema.frost_service.api.dto.BusinessUserDTORequest;
import com.sistema.frost_service.api.dto.BusinessUserDTOResponse;
import com.sistema.frost_service.application.service.BusinessUserService;
import com.sistema.frost_service.exceptions.BusinessNotFoundException;
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
    public ResponseEntity<List<BusinessUserDTOResponse>> findAllBusinessUsers() {
        List<BusinessUserDTOResponse> businessUserDTOResponses = businessUserService.findAllBusinessUsers();
        return ResponseEntity.ok(businessUserDTOResponses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BusinessUserDTOResponse> findBusinessUserById(@PathVariable Long id) {
        BusinessUserDTOResponse dto = businessUserService.findBusinessUserById(id);
        return ResponseEntity.ok(dto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BusinessUserDTOResponse> editBusinessUser(@PathVariable("id") Long id, @RequestBody @Valid BusinessUserDTORequest businessUserDTORequest) {
        BusinessUserDTOResponse updated = businessUserService.editBusinessUser(id, businessUserDTORequest);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBusinessUser(@PathVariable ("id") Long id) {
        try {
            businessUserService.deleteBusinessUser(id);
            return ResponseEntity.ok().build();
        } catch (BusinessNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
