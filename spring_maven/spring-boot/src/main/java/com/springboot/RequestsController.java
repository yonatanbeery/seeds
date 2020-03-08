package com.springboot;

import org.springframework.web.bind.annotation.RestController;

import com.bamboo_spec.PlanSpec;

import java.net.MalformedURLException;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class RequestsController {

	@RequestMapping("/")
	public String index() throws MalformedURLException {
		String msg = "Greetings from Spring Boot!\n";
		return msg;
	}
	
	@RequestMapping(value = "/bamboo/create/{projectName}/{planName}/{planKey}")
	public String bamboo(@PathVariable("projectName") String projectName, 
						 @PathVariable("planName") String planName, 
						 @PathVariable("planKey") String planKey) throws Exception {
		return PlanSpec.createPlan(projectName, planName, planKey);
	}

}