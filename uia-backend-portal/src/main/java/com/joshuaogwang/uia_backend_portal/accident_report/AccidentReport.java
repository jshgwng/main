package com.joshuaogwang.uia_backend_portal.accident_report;

import com.joshuaogwang.uia_backend_portal.audit.BaseEntity;
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
@Table(name = "accident_reports")
public class AccidentReport extends BaseEntity {
    @Id
    @GeneratedValue
    private Integer id;
    private String location;
    private String vin;
    private String model;
    private String yearOfManufacture;
    private String engineCapacity;
    private String registrationNo;
    @Lob
    private String description;
    private String severity;
    private String status;
    private Date dateOfAccident;
    @Lob
    private String scenePhotographs;
    private String motorInsuranceStickerImg;
    private String insurer;
    private String claimRefNo;
    private String policyRefNo;
    private String nearestPolicyStation;
    private int fatalities;
}
