package com.joshuaogwang.uia_backend_portal.policy;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface UserPolicyRepository extends JpaRepository<UserPolicy,Integer> {
    List<UserPolicy> findByUserId(Integer userId);
    List<UserPolicy> findByStatus(String status);
    @Query("SELECT up FROM UserPolicy up WHERE up.endDate BETWEEN :startDate AND :endDate")
    List<UserPolicy> findExpiringUserPolicies(LocalDate startDate, LocalDate endDate);
}
