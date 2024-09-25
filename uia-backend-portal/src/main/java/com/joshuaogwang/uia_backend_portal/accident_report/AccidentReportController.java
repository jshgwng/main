package com.joshuaogwang.uia_backend_portal.accident_report;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/accident-reports")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
@Tag(name = "Accident Reports")
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

    @GetMapping("/user-accident-reports")
    public ResponseEntity<List<AccidentReport>> getUserAccidentReports(@RequestParam("username") String username){
        return ResponseEntity.ok(accidentReportService.getUserAccidentReports(username));
    }

    @PostMapping("/change-status")
    public ResponseEntity<?> changeAccidentReportStatus(@RequestParam("status") String status, @RequestParam("accidentReportId") Integer accidentReportId) {
        try {
            AccidentReportResponse accidentReportResponse = accidentReportService.changeAccidentReportStatus(accidentReportId, status);
            return ResponseEntity.ok(accidentReportResponse);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @DeleteMapping("/delete-accident-report")
    public ResponseEntity<String> deleteAccidentReport(@RequestParam("accidentReportId") Integer accidentReportId){
        try{
            return ResponseEntity.ok(accidentReportService.deleteAccidentReport(accidentReportId));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
