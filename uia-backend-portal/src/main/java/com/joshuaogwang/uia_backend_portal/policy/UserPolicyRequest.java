package com.joshuaogwang.uia_backend_portal.policy;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserPolicyRequest {
    private String registrationNumber;
    private String make;
    private String model;
    private Integer year;
    private String insurance;
    private String policyNumber;
    private String policyType;
    private String status;
    private String coverageAmount;
    private Date startDate;
    private Date endDate;
    private double premium;
}
