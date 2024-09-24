package com.joshuaogwang.uia_backend_portal.user.profile;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserProfileRepository extends JpaRepository<UserProfile,Integer> {
    Optional<UserProfile> findByUserId(Integer userId);
}
