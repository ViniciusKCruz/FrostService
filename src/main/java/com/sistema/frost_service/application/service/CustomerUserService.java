package com.sistema.frost_service.application.service;

import com.sistema.frost_service.api.dto.CustomerUserDTORequest;
import com.sistema.frost_service.api.dto.CustomerUserDTOResponse;
import com.sistema.frost_service.api.mapper.CustomerUserMapper;
import com.sistema.frost_service.application.formatter.CPFFormatter;
import com.sistema.frost_service.domain.model.CustomerUser;
import com.sistema.frost_service.exceptions.CustomerNotFoundException;
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

    public CustomerUserDTOResponse findCustomerUserById(Long id) {
        CustomerUser existingCustomerUser = customerUserRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Usuário de id " + id + " não encontrado"));
        return customerUserMapper.toDto(existingCustomerUser);
    }

    public CustomerUserDTOResponse editUser(Long id, CustomerUserDTORequest request) {
        CustomerUser existingCustomerUser = customerUserRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Usuário com ID " + id + " não encontrado"));

        String validCpf = cpfFormatter.toValidCPF(request.getCpf());
        request.setCpf(validCpf);

        String formattedCpf = cpfFormatter.toFormatCPF(validCpf);

        /*boolean cpfExists = customerUserRepository.existsByCpf(validCpf);
        if (cpfExists && !existingCustomerUser.getCpf().equals(validCpf)) {
            throw new IllegalArgumentException("CPF já cadastrado!");
        }*/

        existingCustomerUser.setFirst_Name(request.getFirst_Name()); // <-- Verifique o nome correto do método no Model
        existingCustomerUser.setEmail(request.getEmail());
        existingCustomerUser.setCpf(validCpf);

        CustomerUser updated = customerUserRepository.save(existingCustomerUser);
        return customerUserMapper.toDto(updated);
    }

    public void deleteCustomerUser(Long id) {
        CustomerUser existingCustomerUser = customerUserRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Usuário com ID " + id + " não encontrado"));
        customerUserRepository.delete(existingCustomerUser);
    }
}