package com.sistema.frost_service.infrastructure.repository;

import com.sistema.frost_service.domain.model.CustomerUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerUserRepository extends JpaRepository<CustomerUser, Long> {
    Optional<CustomerUser> findByCpf(String cpf);
    Boolean existsByCpf(String cpf);
}
