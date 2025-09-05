package com.sistema.frost_service.api.mapper;

import com.sistema.frost_service.api.dto.BusinessUserDTOResponse;
import com.sistema.frost_service.api.dto.CustomerUserDTORequest;
import com.sistema.frost_service.api.dto.CustomerUserDTOResponse;
import com.sistema.frost_service.domain.model.CustomerUser;

public class CustomerUserMapper {


    public CustomerUserDTOResponse toDto(CustomerUser customerUser) {
        if (customerUser == null) {
            return null;
        }

        CustomerUserDTOResponse customerUserDTOResponse = new CustomerUserDTOResponse();

        customerUserDTOResponse.setEmail(customerUser.getEmail());
        customerUserDTOResponse.setFirst_Name(customerUser.getFirst_Name());
        customerUserDTOResponse.setLast_Name(customerUser.getLast_Name());
        customerUserDTOResponse.setGender(customerUser.getGender());
        customerUserDTOResponse.setCpf(customerUser.getCpf());

        return customerUserDTOResponse;
    }


    public CustomerUser toEntity(CustomerUserDTORequest customerUserDTORequest) {
        if (customerUserDTORequest == null) {
            return null;
        }

        CustomerUser customerUser = new CustomerUser();

        customerUser.setEmail(customerUserDTORequest.getEmail());
        customerUser.setFirst_Name(customerUserDTORequest.getFirst_Name());
        customerUser.setLast_Name(customerUserDTORequest.getLast_Name());
        customerUser.setGender(customerUserDTORequest.getGender());
        customerUser.setCpf(customerUserDTORequest.getCpf());

        return customerUser;
    }
}
