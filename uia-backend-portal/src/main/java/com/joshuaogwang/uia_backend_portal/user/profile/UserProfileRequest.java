package com.joshuaogwang.uia_backend_portal.user.profile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileRequest {
    private Date dateOfBirth;
    private String languagePreference;
    private String theme;
    private String notificationSettings;
    private String socialLinks;
    private String profilePictureUrl;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String state;
    private String country;
    private String postalCode;
    private String bio;
}
