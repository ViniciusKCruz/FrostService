package com.sistema.frost_service.application.service;

import com.sistema.frost_service.api.dto.CustomerUserDTORequest;
import com.sistema.frost_service.api.dto.CustomerUserDTOResponse;
import com.sistema.frost_service.api.mapper.CustomerUserMapper;
import com.sistema.frost_service.application.formatter.CPFFormatter;
import com.sistema.frost_service.domain.model.CustomerUser;
import com.sistema.frost_service.infrastructure.repository.CustomerUserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerUserService {

    private final CustomerUserRepository customerUserRepository;
    private final CustomerUserMapper customerUserMapper;
    private final CPFFormatter cpfFormatter;

    public CustomerUserService(CustomerUserRepository customerUserRepository,
                               CustomerUserMapper customerUserMapper,
                               CPFFormatter cpfFormatter) {
        this.customerUserRepository = customerUserRepository;
        this.customerUserMapper = customerUserMapper;
        this.cpfFormatter = cpfFormatter;
    }

    public CustomerUserDTOResponse addUser(CustomerUserDTORequest customerUserDTORequest) {
        CustomerUser customerUser = customerUserMapper.toEntity(customerUserDTORequest);
        CustomerUser savedCustomerUser = customerUserRepository.save(customerUser);
        return customerUserMapper.toDto(savedCustomerUser);
    }

    public List<CustomerUserDTOResponse> findAllUsers() {
        List<CustomerUser> customers = customerUserRepository.findAll();
        List<CustomerUserDTOResponse> dtos = new ArrayList<>();
        for (CustomerUser customer : customers) {
            dtos.add(customerUserMapper.toDto(customer));
        }
        return dtos;
    }

}