package com.joshuaogwang.uia_backend_portal.accident_report;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccidentReportRequest {
    private String location;
    private String vin;
    private String model;
    private String yearOfManufacture;
    private String engineCapacity;
    private String registrationNo;
    private String description;
    private String severity;
    private String status;
    private Date dateOfAccident;
    private String scenePhotographs;
    private String motorInsuranceStickerImg;
    private String insurer;
    private String claimRefNo;
    private String policyRefNo;
    private String nearestPolicyStation;
    private int fatalities;
}
