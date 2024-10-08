package com.joshuaogwang.uia_backend_portal.policy;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user-policies")
@RequiredArgsConstructor
@Tag(name = "User Policies")
public class UserPolicyController {
    private final UserPolicyService userPolicyService;

    @PostMapping
    public ResponseEntity<?> saveUserPolicy(@RequestBody UserPolicyRequest userPolicyRequest, @RequestParam("userId") Integer userId) {
        try {
            UserPolicyResponse userPolicyResponse = userPolicyService.saveUserPolicy(userPolicyRequest, userId);
            return ResponseEntity.ok(userPolicyResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<UserPolicyDTO>> fetchUserPolicies(@RequestParam("userId") Integer userId){
        return ResponseEntity.ok(userPolicyService.fetchUserPolicies(userId));
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserPolicyDTO>> fetchAllUserPolicies() throws Exception {
        return ResponseEntity.ok(userPolicyService.fetchAllUserPolicies());
    }
}
