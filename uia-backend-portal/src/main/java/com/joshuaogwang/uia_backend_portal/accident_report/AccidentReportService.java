package com.joshuaogwang.uia_backend_portal.accident_report;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class AccidentReportService {
    private final AccidentReportRepository accidentReportRepository;

    public AccidentReportResponse submitAccidentReport(AccidentReportRequest accidentReportRequest) {
        var accidentReport = AccidentReport
                .builder()
                .location(accidentReportRequest.getLocation())
                .vin(accidentReportRequest.getVin())
                .model(accidentReportRequest.getModel())
                .yearOfManufacture(accidentReportRequest.getYearOfManufacture())
                .engineCapacity(accidentReportRequest.getEngineCapacity())
                .registrationNo(accidentReportRequest.getRegistrationNo())
                .description(accidentReportRequest.getDescription())
                .severity(accidentReportRequest.getSeverity())
                .status(accidentReportRequest.getStatus())
                .dateOfAccident(accidentReportRequest.getDateOfAccident())
                .scenePhotographs(accidentReportRequest.getScenePhotographs())
                .motorInsuranceStickerImg(accidentReportRequest.getMotorInsuranceStickerImg())
                .insurer(accidentReportRequest.getInsurer())
                .claimRefNo(accidentReportRequest.getClaimRefNo())
                .policyRefNo(accidentReportRequest.getPolicyRefNo())
                .nearestPolicyStation(accidentReportRequest.getNearestPolicyStation())
                .fatalities(accidentReportRequest.getFatalities())
                .build();
        var submittedAccidentReport = accidentReportRepository.save(accidentReport);
        return AccidentReportResponse
                .builder()
                .message("Accident Report submitted successfully.")
                .accidentReport(submittedAccidentReport)
                .build();
    }
}
