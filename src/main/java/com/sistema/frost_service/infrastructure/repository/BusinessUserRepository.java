package com.sistema.frost_service.infrastructure.repository;

import com.sistema.frost_service.domain.model.BusinessUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

interface BusinessUserRepository extends JpaRepository<BusinessUser, Long> {
    Optional<BusinessUser> findByCNPJ(String cnpj);
}
