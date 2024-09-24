package com.joshuaogwang.uia_backend_portal.policy;

import com.joshuaogwang.uia_backend_portal.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
        return UserPolicyResponse
                .builder()
                .message("User policy added successfully")
                .userPolicy(userPolicy)
                .build();
    }

    public List<UserPolicy> fetchUserPolicies(Integer userId) {
        return userPolicyRepository.findByUserId(userId);
    }

    public List<UserPolicy> fetchAllUserPolicies() throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.getAuthorities().stream().noneMatch(grantedAuthority -> grantedAuthority.getAuthority().equals("ADMIN"))) {
            throw new Exception("Access Denied");
        }
        return userPolicyRepository.findAll();
    }

    public List<UserPolicy> getExpiringPolicies() {
        LocalDate today = LocalDate.now();
        LocalDate oneMonth = today.plusMonths(1);
        return userPolicyRepository.findExpiringUserPolicies(today, oneMonth);
    }
}
