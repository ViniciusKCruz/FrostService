package com.sistema.frost_service.api.mapper;

import com.sistema.frost_service.api.dto.BusinessUserDTOResponse;
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


    public CustomerUser toEntity(CustomerUserDTOResponse customerUserDTOResponse) {
        if (customerUserDTOResponse == null) {
            return null;
        }

        CustomerUser customerUser = new CustomerUser();

        customerUser.setEmail(customerUserDTOResponse.getEmail());
        customerUser.setFirst_Name(customerUserDTOResponse.getFirst_Name());
        customerUser.setLast_Name(customerUserDTOResponse.getLast_Name());
        customerUser.setGender(customerUserDTOResponse.getGender());
        customerUser.setCpf(customerUser.getCpf());

        return customerUser;
    }
}
