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
    private final CPFFormatter cpfFormatter;

    public CustomerUserService(CustomerUserRepository customerUserRepository,
                               CPFFormatter cpfFormatter) {
        this.customerUserRepository = customerUserRepository;
        this.cpfFormatter = cpfFormatter;
    }

    public CustomerUserDTOResponse addUser(CustomerUserDTORequest customerUserDTORequest) {
        CustomerUser customerUser = CustomerUserMapper.toEntity(customerUserDTORequest);
        CustomerUser savedCustomerUser = customerUserRepository.save(customerUser);
        return CustomerUserMapper.toDto(savedCustomerUser);
    }

    public List<CustomerUserDTOResponse> findAllCostumerUsers() {
        List<CustomerUser> customers = customerUserRepository.findAll();
        List<CustomerUserDTOResponse> dtos = new ArrayList<>();
        for (CustomerUser customer : customers) {
            dtos.add(CustomerUserMapper.toDto(customer));
        }
        return dtos;
    }

    public CustomerUserDTOResponse findCustomerUserById(Long id) {
        CustomerUser existingCustomerUser = customerUserRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Usuário de id " + id + " não encontrado"));
        return CustomerUserMapper.toDto(existingCustomerUser);
    }

    public CustomerUserDTOResponse editCustomerUser(Long id, CustomerUserDTORequest customerUserDTORequest) {
        CustomerUser existingCustomerUser = customerUserRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Usuário com ID " + id + " não encontrado"));

        String validCpf = cpfFormatter.toValidCPF(customerUserDTORequest.getCpf());
        customerUserDTORequest.setCpf(validCpf);

        String formattedCpf = cpfFormatter.toFormatCPF(validCpf);

        boolean cpfExists = customerUserRepository.existsByCpf(validCpf);
        if (cpfExists && !existingCustomerUser.getCpf().equals(validCpf)) {
            throw new IllegalArgumentException("CPF já cadastrado!");
        }

        existingCustomerUser.setFirstName(customerUserDTORequest.getFirstName()); // <-- Verifique o nome correto do método no Model
        existingCustomerUser.setEmail(customerUserDTORequest.getEmail());
        existingCustomerUser.setCpf(formattedCpf);
        existingCustomerUser.setGender((customerUserDTORequest.getGender()));
        existingCustomerUser.setPasswordHash(customerUserDTORequest.getPasswordHash());
        existingCustomerUser.setSalt(customerUserDTORequest.getSalt());

        CustomerUser updated = customerUserRepository.save(existingCustomerUser);
        return CustomerUserMapper.toDto(updated);
    }

    public void deleteCustomerUser(Long id) {
        CustomerUser existingCustomerUser = customerUserRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException("Usuário com ID " + id + " não encontrado"));
        customerUserRepository.delete(existingCustomerUser);
    }

}