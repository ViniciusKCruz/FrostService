package com.sistema.frost_service.application.service;

import com.sistema.frost_service.api.dto.BusinessUserDTORequest;
import com.sistema.frost_service.api.dto.BusinessUserDTOResponse;
import com.sistema.frost_service.api.mapper.BusinessUserMapper;
import com.sistema.frost_service.domain.model.BusinessUser;
import com.sistema.frost_service.infrastructure.repository.BusinessUserRepository;

import java.util.ArrayList;
import java.util.List;

public class BusinessUserService {

    private final BusinessUserRepository businessUserRepository;
    private final BusinessUserMapper businessUserMapper;


    public BusinessUserService(BusinessUserRepository businessUserRepository, BusinessUserMapper businessUserMapper) {
        this.businessUserRepository = businessUserRepository;
        this.businessUserMapper = businessUserMapper;
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

}
