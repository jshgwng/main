package com.joshuaogwang.uia_backend_portal.auth;

import com.joshuaogwang.uia_backend_portal.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private Integer id;
    private String fullName;
    private String phoneNumber;
    private String email;
    private Role role;
}
