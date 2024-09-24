package com.joshuaogwang.uia_backend_portal.policy;

import com.joshuaogwang.uia_backend_portal.audit.BaseEntity;
import com.joshuaogwang.uia_backend_portal.user.User;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_policies")
@Schema(hidden = true)
public class UserPolicy extends BaseEntity {
    @Id
    @GeneratedValue
    private Integer id;
    private String registrationNumber;
    private String make;
    private String model;
    private Integer year;
    private String insurance;
    private String policyNumber;
    private String policyType;
    private String status;
    private String coverageAmount;
    private LocalDate startDate;
    private LocalDate endDate;
    private double premium;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
