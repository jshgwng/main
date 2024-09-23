package com.joshuaogwang.uia_backend_portal.accident_report;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccidentReportResponse {
    private String message;
    private AccidentReport accidentReport;
}
