package com.joshuaogwang.uia_backend_portal.policy;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserPolicyResponse {
    private String message;
    private UserPolicyDTO userPolicyDTO;
}
