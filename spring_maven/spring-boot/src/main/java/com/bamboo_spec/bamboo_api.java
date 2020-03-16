package com.bamboo_spec;

import java.io.IOException;
import java.sql.Timestamp;

import org.json.JSONArray;
import org.json.JSONObject;

import com.springboot.ApiToResponse;

public class bamboo_api {
	
	public static Boolean isUsedPlanKey(String projectName, String planName, String planKey) throws IOException {
		String url = "http://localhost:8085/rest/api/latest/project.json?expand=projects.project.plans";
		StringBuffer response = ApiToResponse.getResponse(url);
	    JSONObject jsonResponse = new JSONObject(response.toString());
	    JSONArray projects = jsonResponse.getJSONObject("projects")
										 .getJSONArray("project");
	    for (int i=0;i < projects.length(); i++) {
	    	JSONObject Project = projects.getJSONObject(i);
		    System.out.println("#" + (i + 1) + " project name: " + Project.getString("name"));
		    if (Project.getString("name").equals(projectName)) {
		    	JSONArray plans = Project.getJSONObject("plans")
		    							 .getJSONArray("plan");
		    	for (int j=0;j < plans.length(); j++) {
		    		if (plans.getJSONObject(j).getString("shortKey").equals(planKey) || 
		    			plans.getJSONObject(j).getString("shortName").equals(planName)) {
		    			return true;
		    		}
		    	}
		    }
	    }
	    return false;
	}
	
	public static String getProjectKey(String projectName) throws IOException {
		String url = "http://localhost:8085/rest/api/latest/project.json?expand=projects.project.plans";
		StringBuffer response = ApiToResponse.getResponse(url);
	    JSONObject jsonResponse = new JSONObject(response.toString());
	    JSONArray projects = jsonResponse.getJSONObject("projects")
										 .getJSONArray("project");
	    for (int i=0;i < projects.length(); i++) {
	    	JSONObject Project = projects.getJSONObject(i);
	    	if (Project.getString("name").equals(projectName)) {
	    		return Project.getString("key");
	    	}
	    }
	    
	    //project doesn't exist, let's generate new key
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
	    String key = projectName.toUpperCase().replace(" ", "");
	    key = key.concat(String.valueOf(timestamp.getTime()));
	    System.out.println(key);
	    return key;
	}
}
