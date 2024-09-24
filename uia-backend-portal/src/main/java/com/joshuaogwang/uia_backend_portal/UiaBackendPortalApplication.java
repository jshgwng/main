package com.joshuaogwang.uia_backend_portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class UiaBackendPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(UiaBackendPortalApplication.class, args);
	}

}
