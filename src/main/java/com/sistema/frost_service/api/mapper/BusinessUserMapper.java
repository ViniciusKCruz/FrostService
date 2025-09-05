package com.sistema.frost_service.api.mapper;

import com.sistema.frost_service.api.dto.BusinessUserDTORequest;
import com.sistema.frost_service.api.dto.BusinessUserDTOResponse;
import com.sistema.frost_service.domain.model.BusinessUser;
import org.springframework.stereotype.Component;

@Component
public class BusinessUserMapper {

    public static BusinessUserDTOResponse toDto(BusinessUser businessUser) {
        if (businessUser == null) {
            return null;
        }

        BusinessUserDTOResponse businessUserDTOResponse = new BusinessUserDTOResponse();

        businessUserDTOResponse.setCnpj(businessUser.getCnpj());
        businessUserDTOResponse.setLegalName(businessUser.getLegalName());
        businessUserDTOResponse.setTradeName(businessUser.getTradeName());
        businessUserDTOResponse.setEmail(businessUser.getEmail());

        return businessUserDTOResponse;
    }

    public  static BusinessUser toEntity(BusinessUserDTORequest businessUserDTORequest) {
        if (businessUserDTORequest == null) {
            return null;
        }

        BusinessUser businessUser = new BusinessUser();

        businessUser.setCnpj(businessUserDTORequest.getCnpj());
        businessUser.setLegalName(businessUserDTORequest.getLegalName());
        businessUser.setTradeName(businessUserDTORequest.getTradeName());
        businessUser.setEmail(businessUserDTORequest.getEmail());

        return businessUser;

    }

}
