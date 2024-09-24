package com.joshuaogwang.uia_backend_portal.accident_report;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/accident-reports")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class AccidentReportController {
    private final AccidentReportService accidentReportService;

    @PostMapping
    public ResponseEntity<?> submitAccidentReport(@RequestBody AccidentReportRequest accidentReportRequest) {
        try {
            AccidentReportResponse accidentReportResponse = accidentReportService.submitAccidentReport(accidentReportRequest);
            return ResponseEntity.ok(accidentReportResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<AccidentReport>> getAccidentReports() throws Exception {
        return ResponseEntity.ok(accidentReportService.getAccidentReports());
    }

    @GetMapping("/user-accident-reports")
    public ResponseEntity<List<AccidentReport>> getUserAccidentReports(@RequestParam("username") String username) {
        return ResponseEntity.ok(accidentReportService.getUserAccidentReports(username));
    }

    @PostMapping("/change-status")
    public ResponseEntity<?> changeAccidentReportStatus(@RequestParam("status") String status,@RequestParam("accidentReportId") Integer accidentReportId){
        try{
            AccidentReportResponse accidentReportResponse = accidentReportService.changeAccidentReportStatus(accidentReportId,status);
            return ResponseEntity.ok(accidentReportResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
