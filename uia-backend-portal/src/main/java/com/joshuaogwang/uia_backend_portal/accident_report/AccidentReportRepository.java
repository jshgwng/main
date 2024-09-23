package com.joshuaogwang.uia_backend_portal.accident_report;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccidentReportRepository extends JpaRepository<AccidentReport,Integer> {
    List<AccidentReport> findByCreatedBy(String createdBy);
}
