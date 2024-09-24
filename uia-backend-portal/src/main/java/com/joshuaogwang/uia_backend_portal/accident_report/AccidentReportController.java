package com.joshuaogwang.uia_backend_portal.accident_report;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/accident-reports")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequiredArgsConstructor
public class AccidentReportController {
    private final AccidentReportService accidentReportService;

    @PostMapping
    public ResponseEntity<?> submitAccidentReport(@RequestBody AccidentReportRequest accidentReportRequest) {
        try {
            // Try to submit the accident report and return the success response
            AccidentReportResponse response = accidentReportService.submitAccidentReport(accidentReportRequest);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Log the error for debugging
            e.printStackTrace();

            // Return an error response with a bad request status and error message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while submitting the accident report: " + e.getMessage());
        }
    }


    @GetMapping
    public ResponseEntity<List<AccidentReport>> getAccidentReports() throws Exception {
        return ResponseEntity.ok(accidentReportService.getAccidentReports());
    }

    @GetMapping("/user-accident-reports")
    public ResponseEntity<List<AccidentReport>> getUserAccidentReports(@RequestParam("username") String username){
        return ResponseEntity.ok(accidentReportService.getUserAccidentReports(username));
    }
}
