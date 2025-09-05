package com.sistema.frost_service.application.service;

import com.sistema.frost_service.api.dto.BusinessUserDTORequest;
import com.sistema.frost_service.api.dto.BusinessUserDTOResponse;
import com.sistema.frost_service.api.mapper.BusinessUserMapper;
import com.sistema.frost_service.domain.model.BusinessUser;
import com.sistema.frost_service.infrastructure.repository.BusinessUserRepository;

public class BusinessUserService {

    private final BusinessUserRepository businessUserRepository;
    private final BusinessUserMapper businessUserMapper;


    public BusinessUserService( BusinessUserRepository  businessUserRepository, BusinessUserMapper businessUserMapper) {
        this.businessUserRepository = businessUserRepository;
        this.businessUserMapper = businessUserMapper;
    }

    public BusinessUserDTOResponse addBusiness(BusinessUserDTORequest businessUserDTORequest) {
        BusinessUser businessUser = businessUserMapper.toEntity(businessUserDTORequest);
        BusinessUser savedBusinessUser = businessUserRepository.save(businessUser);
        return businessUserMapper.toDto(savedBusinessUser);
    }

}
