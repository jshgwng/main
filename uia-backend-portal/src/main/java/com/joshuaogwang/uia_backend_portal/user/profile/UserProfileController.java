package com.joshuaogwang.uia_backend_portal.user.profile;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user-profile")
@RequiredArgsConstructor
public class UserProfileController {
    private final UserProfileService userProfileService;
    @PostMapping
    public ResponseEntity<?> saveUserProfile(@RequestBody UserProfileRequest userProfileRequest, @RequestParam("userId") Integer userId){
        try{
            UserProfileResponse userProfileResponse = userProfileService.saveUserProfile(userProfileRequest,userId);
            return ResponseEntity.ok(userProfileResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
