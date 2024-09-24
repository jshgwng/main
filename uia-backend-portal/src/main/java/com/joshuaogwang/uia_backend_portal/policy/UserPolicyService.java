package com.joshuaogwang.uia_backend_portal.policy;

import com.joshuaogwang.uia_backend_portal.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
}
