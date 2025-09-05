package com.sistema.frost_service.infrastructure.repository;

import com.sistema.frost_service.domain.model.BusinessUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BusinessUserRepository extends JpaRepository<BusinessUser, Long> {
    Optional<BusinessUser> findByCNPJ(String cnpj);
    boolean existsByCnpj(String cnpj);
}
