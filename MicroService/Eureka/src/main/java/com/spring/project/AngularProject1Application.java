package com.spring.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
@EnableEurekaServer
@SpringBootApplication
public class AngularProject1Application {

	public static void main(String[] args) {
		SpringApplication.run(AngularProject1Application.class, args);
	}

}
