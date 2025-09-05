package com.sistema.frost_service.api.mapper;

import com.sistema.frost_service.api.dto.CustomerUserDTORequest;
import com.sistema.frost_service.api.dto.CustomerUserDTOResponse;
import com.sistema.frost_service.domain.model.CustomerUser;
import org.springframework.stereotype.Component;

@Component
public class CustomerUserMapper {

    public static CustomerUserDTOResponse toDto(CustomerUser customerUser) {
        if (customerUser == null) {
            return null;
        }

        CustomerUserDTOResponse customerUserDTOResponse = new CustomerUserDTOResponse();

        customerUserDTOResponse.setEmail(customerUser.getEmail());
        customerUserDTOResponse.setFirstName(customerUser.getFirstName());
        customerUserDTOResponse.setLastName(customerUser.getLastName());
        customerUserDTOResponse.setGender(customerUser.getGender());
        customerUserDTOResponse.setCpf(customerUser.getCpf());

        return customerUserDTOResponse;
    }


    public static CustomerUser toEntity(CustomerUserDTORequest customerUserDTORequest) {
        if (customerUserDTORequest == null) {
            return null;
        }

        CustomerUser customerUser = new CustomerUser();

        customerUser.setEmail(customerUserDTORequest.getEmail());
        customerUser.setFirstName(customerUserDTORequest.getFirstName());
        customerUser.setLastName(customerUserDTORequest.getLastName());
        customerUser.setGender(customerUserDTORequest.getGender());
        customerUser.setCpf(customerUserDTORequest.getCpf());

        return customerUser;
    }
}
