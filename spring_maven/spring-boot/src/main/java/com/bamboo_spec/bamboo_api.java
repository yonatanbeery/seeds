package com.bamboo_spec;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDate;

import org.json.JSONArray;
import org.json.JSONObject;

public class bamboo_api {
	public static StringBuffer getResponse(String url) throws IOException {
		URL obj = new URL(url);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
	    // optional default is GET
	    con.setRequestMethod("GET");
	    int responseCode = con.getResponseCode();
	    System.out.println("\nSending 'GET' request to URL : " + url);
	    System.out.println("Response Code : " + responseCode);
	    //proccess response
	    BufferedReader in = new BufferedReader(
	            new InputStreamReader(con.getInputStream()));
	    String inputLine;
	    StringBuffer response = new StringBuffer();
	    while ((inputLine = in.readLine()) != null) {
	    	response.append(inputLine);
	    }
	    in.close();
	    //print in String
	    //System.out.println(response.toString());
	    
	    //return full server response
	    return response;
	}
	
	public static Boolean isUsedPlanKey(String projectName, String planName, String planKey) throws IOException {
		String url = "http://localhost:8085/rest/api/latest/project.json?expand=projects.project.plans";
		StringBuffer response = getResponse(url);
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
		StringBuffer response = getResponse(url);
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
	    LocalDate date = LocalDate.now();
	    String key = projectName.toUpperCase().replace(" ", "");
	    key = key.concat(date.toString().replace("-", ""));
	    System.out.println(key);
	    return key;
	}
}
