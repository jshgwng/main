package com.joshuaogwang.uia_backend_portal.user.profile;

import com.joshuaogwang.uia_backend_portal.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserProfileService {
    private final UserProfileRepository userProfileRepository;
    private final UserRepository userRepository;

    public UserProfileResponse saveUserProfile(UserProfileRequest userProfileRequest, Integer userId) {
        var user = userRepository.findById(userId).orElseThrow();
        var userProfile = UserProfile.builder()
                .dateOfBirth(userProfileRequest.getDateOfBirth())
                .languagePreference(userProfileRequest.getLanguagePreference())
                .theme(userProfileRequest.getTheme())
                .notificationSettings(userProfileRequest.getNotificationSettings())
                .socialLinks(userProfileRequest.getSocialLinks())
                .addressLine1(userProfileRequest.getAddressLine1())
                .addressLine2(userProfileRequest.getAddressLine2())
                .city(userProfileRequest.getCity())
                .state(userProfileRequest.getState())
                .country(userProfileRequest.getCountry())
                .postalCode(userProfileRequest.getPostalCode())
                .bio(userProfileRequest.getBio())
                .user(user)
                .build();
        userProfileRepository.save(userProfile);
        return UserProfileResponse.builder().userProfile(userProfile).user(user).build();
    }

    public UserProfileResponse getUserProfile(Integer userId) {
        var user = userRepository.findById(userId).orElseThrow();
        var userProfile = userProfileRepository.findByUserId(userId).orElseThrow();
        return UserProfileResponse.builder().userProfile(userProfile).user(user).build();
    }

    public UserProfileResponse editUserProfile(UserProfileRequest userProfileRequest, Integer userId) {
        var userProfile = userProfileRepository.findByUserId(userId).orElseThrow();
        userProfile.setDateOfBirth(userProfileRequest.getDateOfBirth());
        userProfile.setLanguagePreference(userProfileRequest.getLanguagePreference());
        userProfile.setTheme(userProfileRequest.getTheme());
        userProfile.setNotificationSettings(userProfile.getNotificationSettings());
        userProfile.setSocialLinks(userProfile.getSocialLinks());
        userProfile.setProfilePictureUrl(userProfile.getProfilePictureUrl());
        userProfile.setAddressLine1(userProfile.getAddressLine1());
        userProfile.setAddressLine2(userProfile.getAddressLine2());
        userProfile.setCity(userProfileRequest.getCity());
        userProfile.setState(userProfileRequest.getState());
        userProfile.setCountry(userProfile.getCountry());
        userProfile.setPostalCode(userProfile.getPostalCode());
        userProfile.setBio(userProfile.getBio());
        userProfileRepository.save(userProfile);
        return UserProfileResponse.builder().userProfile(userProfile).build();
    }
}
