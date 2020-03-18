package com.springboot;

import org.springframework.web.bind.annotation.RestController;

import com.api_frameworks.bitbucket;
import com.bamboo_spec.PlanSpec;
import com.bitbucket_api.BitbucketApi;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.Set;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class RequestsController {

	private static bitbucket bitbucketFramework = new bitbucket();  
	
	@CrossOrigin(origins = "*")
	@RequestMapping("/")
	public String index() throws MalformedURLException {
		String msg = "Greetings from Spring Boot!\n";
		return msg;
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/bamboo/create/{projectName}/{planName}/{planKey}")
	public String createBambooPlan(@PathVariable("projectName") String projectName, 
						 @PathVariable("planName") String planName, 
						 @PathVariable("planKey") String planKey) throws Exception {
		return PlanSpec.createPlan(projectName, planName, planKey);
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping("/bitbucket/allProjects")
	public String[] bitbucketProjects() throws IOException {
		return BitbucketApi.AllProjects();
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping("/frameworks/bitbucketTypes")
	public Set<String> bitbucketProjectTypes() throws IOException {
		return bitbucketFramework.getTypes();
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping("/bitbucket/newPlan/{projectName}/{planName}/{PlanTypeName}")
	public String newBitbucketPlan(@PathVariable("projectName") String projectName, 
			 @PathVariable("planName") String planName, 
			 @PathVariable("PlanTypeName") String PlanTypeName) throws IOException {
		if (bitbucketFramework.createPlan(projectName, planName, PlanTypeName)) {
			return "success";
		} else {
			return PlanTypeName + " creation failed";
		}
	}
	
	
	
	
	
}