package com.sistema.frost_service.application.service;

import com.sistema.frost_service.api.dto.BusinessUserDTORequest;
import com.sistema.frost_service.api.dto.BusinessUserDTOResponse;
import com.sistema.frost_service.api.mapper.BusinessUserMapper;
import com.sistema.frost_service.application.formatter.CNPJFormatter;
import com.sistema.frost_service.domain.model.BusinessUser;
import com.sistema.frost_service.exceptions.BusinessNotFoundException;
import com.sistema.frost_service.infrastructure.repository.BusinessUserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BusinessUserService {

    private final BusinessUserRepository businessUserRepository;
    private final BusinessUserMapper businessUserMapper;
    private final CNPJFormatter cnpjFormatter;

    // ✅ ÚNICO CONSTRUTOR COM TODAS AS DEPENDÊNCIAS
    public BusinessUserService(BusinessUserRepository businessUserRepository,
                               BusinessUserMapper businessUserMapper,
                               CNPJFormatter cnpjFormatter) {
        this.businessUserRepository = businessUserRepository;
        this.businessUserMapper = businessUserMapper;
        this.cnpjFormatter = cnpjFormatter;
    }

    public BusinessUserDTOResponse addBusinessUser(BusinessUserDTORequest businessUserDTORequest) {
        BusinessUser businessUser = businessUserMapper.toEntity(businessUserDTORequest);
        BusinessUser savedBusinessUser = businessUserRepository.save(businessUser);
        return businessUserMapper.toDto(savedBusinessUser);
    }

    public List<BusinessUserDTOResponse> findAllBusinessUsers() {
        List<BusinessUser> businessUsers = businessUserRepository.findAll();
        List<BusinessUserDTOResponse> businessUserDTOResponses = new ArrayList<>();
        for (BusinessUser businessUser : businessUsers) {
            businessUserDTOResponses.add(businessUserMapper.toDto(businessUser));
        }
        return businessUserDTOResponses;
    }

    public BusinessUserDTOResponse findBusinessUserById(Long id) {
        BusinessUser businessUser = businessUserRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        return BusinessUserMapper.toDto(businessUser);
    }

    public BusinessUserDTOResponse editBusinessUser(Long id, BusinessUserDTORequest request) {
        BusinessUser existingBusinessUser = businessUserRepository.findById(id)
                .orElseThrow(() -> new BusinessNotFoundException("Usuário de id " + id + " não encontrado!"));

        String validCnpj = cnpjFormatter.toValidCNPJ(request.getCnpj());
        request.setCnpj(validCnpj);

        String formattedCnpj = cnpjFormatter.toFormatCNPJ(validCnpj);

        if (businessUserRepository.existsByCnpj(validCnpj)) {
            throw new IllegalArgumentException("CNPJ já existente!");
        }

        BusinessUser updatedBusinessUser = businessUserRepository.save(existingBusinessUser);
        return businessUserMapper.toDto(updatedBusinessUser);
    }

    public void deleteBusinessUser(Long id) {
        BusinessUser existingBusiness = businessUserRepository.findById(id).orElseThrow(() -> new BusinessNotFoundException("CNPJ  " + id + " não encontrado!"));
        businessUserRepository.delete(existingBusiness);
    }
}



