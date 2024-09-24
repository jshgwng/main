package com.joshuaogwang.uia_backend_portal.policy;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserPolicyRepository extends JpaRepository<UserPolicy,Integer> {
    List<UserPolicy> findByUserId(Integer userId);
    List<UserPolicy> findByStatus(String status);
}
