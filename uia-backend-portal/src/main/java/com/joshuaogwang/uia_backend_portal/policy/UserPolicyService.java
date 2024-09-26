package com.joshuaogwang.uia_backend_portal.policy;

import com.joshuaogwang.uia_backend_portal.user.UserDTO;
import com.joshuaogwang.uia_backend_portal.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserPolicyService {
    private final UserPolicyRepository userPolicyRepository;
    private final UserRepository userRepository;

    public UserPolicyResponse saveUserPolicy(UserPolicyRequest userPolicyRequest, Integer userId) {
        var user = userRepository.findById(userId).orElseThrow();
        var userPolicy = UserPolicy
                .builder()
                .registrationNumber(userPolicyRequest.getRegistrationNumber())
                .make(userPolicyRequest.getMake())
                .model(userPolicyRequest.getModel())
                .year(userPolicyRequest.getYear())
                .insurance(userPolicyRequest.getInsurance())
                .policyNumber(userPolicyRequest.getPolicyNumber())
                .policyType(userPolicyRequest.getPolicyType())
                .status(userPolicyRequest.getStatus())
                .coverageAmount(userPolicyRequest.getCoverageAmount())
                .startDate(userPolicyRequest.getStartDate())
                .endDate(userPolicyRequest.getEndDate())
                .premium(userPolicyRequest.getPremium())
                .user(user)
                .build();

        userPolicyRepository.save(userPolicy);
        var userDTO = UserDTO
                .builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .phoneNumber(user.getPhoneNumber())
                .email(user.getEmail())
                .build();
        var userPolicyDTO = UserPolicyDTO
                .builder()
                .id(userPolicy.getId())
                .registrationNumber(userPolicy.getRegistrationNumber())
                .make(userPolicyRequest.getMake())
                .model(userPolicy.getModel())
                .year(userPolicy.getYear())
                .insurance(userPolicyRequest.getInsurance())
                .policyNumber(userPolicy.getPolicyNumber())
                .policyType(userPolicy.getPolicyType())
                .status(userPolicy.getStatus())
                .coverageAmount(userPolicy.getCoverageAmount())
                .startDate(userPolicy.getStartDate())
                .endDate(userPolicy.getEndDate())
                .premium(userPolicy.getPremium())
                .user(userDTO)
                .build();
        return UserPolicyResponse
                .builder()
                .message("User policy added successfully")
                .userPolicyDTO(userPolicyDTO)
                .build();
    }

    public List<UserPolicyDTO> fetchUserPolicies(Integer userId) {
        var userPolices = userPolicyRepository.findByUserId(userId);
        var user = userRepository.findById(userId).orElseThrow();
        var userDTO = UserDTO
                .builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .phoneNumber(user.getPhoneNumber())
                .email(user.getEmail())
                .build();
        List<UserPolicyDTO> policies = new ArrayList<>();
        for (UserPolicy userPolicy : userPolices) {
            var userPolicyDTO = UserPolicyDTO
                    .builder()
                    .id(userPolicy.getId())
                    .registrationNumber(userPolicy.getRegistrationNumber())
                    .make(userPolicy.getMake())
                    .model(userPolicy.getModel())
                    .year(userPolicy.getYear())
                    .insurance(userPolicy.getInsurance())
                    .policyNumber(userPolicy.getPolicyNumber())
                    .policyType(userPolicy.getPolicyType())
                    .status(userPolicy.getStatus())
                    .coverageAmount(userPolicy.getCoverageAmount())
                    .startDate(userPolicy.getStartDate())
                    .endDate(userPolicy.getEndDate())
                    .premium(userPolicy.getPremium())
                    .user(userDTO)
                    .build();
            policies.add(userPolicyDTO);
        }
        return policies;
    }

    public List<UserPolicyDTO> fetchAllUserPolicies() throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.getAuthorities().stream().noneMatch(grantedAuthority -> grantedAuthority.getAuthority().equals("ADMIN"))) {
            throw new Exception("Access Denied");
        }
        var userPolices = userPolicyRepository.findAll();
        List<UserPolicyDTO> policies = new ArrayList<>();
        for (UserPolicy userPolicy : userPolices) {
            var user = userRepository.findById(userPolicy.getUser().getId()).orElseThrow();
            var userDTO = UserDTO
                    .builder()
                    .id(user.getId())
                    .fullName(user.getFullName())
                    .phoneNumber(user.getPhoneNumber())
                    .email(user.getEmail())
                    .build();
            var userPolicyDTO = UserPolicyDTO
                    .builder()
                    .id(userPolicy.getId())
                    .registrationNumber(userPolicy.getRegistrationNumber())
                    .make(userPolicy.getMake())
                    .model(userPolicy.getModel())
                    .year(userPolicy.getYear())
                    .insurance(userPolicy.getInsurance())
                    .policyNumber(userPolicy.getPolicyNumber())
                    .policyType(userPolicy.getPolicyType())
                    .status(userPolicy.getStatus())
                    .coverageAmount(userPolicy.getCoverageAmount())
                    .startDate(userPolicy.getStartDate())
                    .endDate(userPolicy.getEndDate())
                    .premium(userPolicy.getPremium())
                    .user(userDTO)
                    .build();
            policies.add(userPolicyDTO);
        }
        return policies;
    }

    public List<UserPolicy> getExpiringPolicies() {
        LocalDate today = LocalDate.now();
        LocalDate oneMonth = today.plusMonths(1);
        return userPolicyRepository.findExpiringUserPolicies(today, oneMonth);
    }
}
