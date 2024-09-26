package com.joshuaogwang.uia_backend_portal.scheduler;

import com.joshuaogwang.uia_backend_portal.notification.NotificationService;
import com.joshuaogwang.uia_backend_portal.policy.UserPolicy;
import com.joshuaogwang.uia_backend_portal.policy.UserPolicyService;
import com.joshuaogwang.uia_backend_portal.user.User;
import com.joshuaogwang.uia_backend_portal.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ExpiryScheduler {
    private final UserPolicyService userPolicyService;
    private final NotificationService notificationService;
    private final UserRepository userRepository;

    @Scheduled(cron = "0 13 16 * * ?")
    public void sendExpiryNotice() {
        List<UserPolicy> userPolicies = userPolicyService.getExpiringPolicies();
        for (UserPolicy userPolicy : userPolicies) {
            User user = userRepository.findById(userPolicy.getUser().getId()).orElseThrow();
            String email = user.getEmail();
            String subject = "Policy Expiry Alert";
            String message = "Dear " + user.getFullName() + ", \nYour policy " + userPolicy.getPolicyNumber() + " is expiring on " + userPolicy.getEndDate() + ". Please renew it to avoid any inconvenience.\n Regards,\nUIA Support Team";
            notificationService.sendEmailAlert(email, subject, message);
        }
    }
}
