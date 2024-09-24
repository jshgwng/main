package com.joshuaogwang.uia_backend_portal.user.profile;

import com.joshuaogwang.uia_backend_portal.audit.BaseEntity;
import com.joshuaogwang.uia_backend_portal.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_profile")
public class UserProfile extends BaseEntity {
    @Id
    @GeneratedValue
    private Integer id;
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
    @Lob
    private String bio;
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
}
