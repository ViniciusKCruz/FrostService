package com.sistema.frost_service.application.service;

import com.sistema.frost_service.api.dto.CustomerUserDTORequest;
import com.sistema.frost_service.api.dto.CustomerUserDTOResponse;
import com.sistema.frost_service.api.mapper.CustomerUserMapper;
import com.sistema.frost_service.domain.model.CustomerUser;
import com.sistema.frost_service.infrastructure.repository.CustomerUserRepository;
import org.springframework.stereotype.Service;

@Service
public class CustomerUserService {

    private final CustomerUserRepository customerUserRepository;
    private final CustomerUserMapper customerUserMapper;

    public CustomerUserService(CustomerUserRepository customerUserRepository, CustomerUserMapper customerUserMapper) {
        this.customerUserRepository = customerUserRepository;
        this.customerUserMapper = customerUserMapper;
    }

    public CustomerUserDTOResponse addUser(CustomerUserDTORequest customerUserDTORequest) {
        CustomerUser customerUser = customerUserMapper.toEntity(customerUserDTORequest);
        CustomerUser savedCustomerUser = customerUserRepository.save(customerUser);
        return customerUserMapper.toDto(savedCustomerUser);
    }
}
