package com.joshuaogwang.uia_backend_portal.user.profile;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user-profile")
@RequiredArgsConstructor
@Tag(name = "User Profile")
public class UserProfileController {
    private final UserProfileService userProfileService;

    @PostMapping
    public ResponseEntity<?> saveUserProfile(@RequestBody UserProfileRequest userProfileRequest, @RequestParam("userId") Integer userId) {
        try {
            UserProfileResponse userProfileResponse = userProfileService.saveUserProfile(userProfileRequest, userId);
            return ResponseEntity.ok(userProfileResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<UserProfileResponse> getUserProfile(@RequestParam("userId") Integer userId) {
        return ResponseEntity.ok(userProfileService.getUserProfile(userId));
    }

    @PostMapping("/edit-profile")
    public ResponseEntity<?> editUserProfile(@RequestBody UserProfileRequest userProfileRequest, @RequestParam("userId") Integer userId) {
        try {
            UserProfileResponse userProfileResponse = userProfileService.editUserProfile(userProfileRequest,userId);
            return ResponseEntity.ok(userProfileResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
