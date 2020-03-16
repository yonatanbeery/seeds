package com.bitbucket_api;

import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONObject;

import com.springboot.ApiToResponse;

public class BitbucketApi {
	public static String[] AllProjects() throws IOException {
		String url = "http://localhost:7990/rest/api/latest/projects";
		StringBuffer response = ApiToResponse.getResponse(url);
	    JSONObject jsonResponse = new JSONObject(response.toString());
	    JSONArray projects = jsonResponse.getJSONArray("values");
	    String ProjectNames [] = new String[projects.length()];
	    for (int i=0;i < projects.length(); i++) {
	    	JSONObject Project = projects.getJSONObject(i);
	    	ProjectNames[i] = Project.getString("name");
	    }
	    return ProjectNames ;
	}
}
