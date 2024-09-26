package com.joshuaogwang.uia_backend_portal.user.profile;

import com.joshuaogwang.uia_backend_portal.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Optional;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileResponse {
    private User user;
    public UserProfile userProfile;
}
