package com.joshuaogwang.uia_backend_portal.accident_report;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/accident-reports")
@RequiredArgsConstructor
public class AccidentReportController {
    private final AccidentReportService accidentReportService;

    @PostMapping
    public ResponseEntity<AccidentReportResponse> submitAccidentReport(@RequestBody AccidentReportRequest accidentReportRequest) {
        return ResponseEntity.ok(accidentReportService.submitAccidentReport(accidentReportRequest));
    }

    @GetMapping
    public ResponseEntity<List<AccidentReport>> getAccidentReports() throws Exception {
        return ResponseEntity.ok(accidentReportService.getAccidentReports());
    }
}
