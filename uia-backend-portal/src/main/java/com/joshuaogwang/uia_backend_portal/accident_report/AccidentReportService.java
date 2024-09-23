package com.joshuaogwang.uia_backend_portal.accident_report;

import com.joshuaogwang.uia_backend_portal.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AccidentReportService {
    private final AccidentReportRepository accidentReportRepository;
    private final UserRepository userRepository;

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

    public List<AccidentReport> getAccidentReports() throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.getAuthorities().stream().noneMatch(grantedAuthority -> grantedAuthority.getAuthority().equals("ADMIN"))){
            throw new Exception("Access Denied");
        }
        return accidentReportRepository.findAll();
    }
}
