package com.api_frameworks;

import java.util.HashMap;
import java.util.Set;

import com.api_frameworks.types.Express;

public class bitbucket {
	private static HashMap<String, planType> planTypes=new HashMap<String,planType>(){{
	    this.put("Express", new Express());
	}};;
	
	public Set<String> getTypes() {
		return planTypes.keySet();
	}
	
	public boolean createPlan(String ProjectName, String planName, String PlanTypeName) {
		return planTypes.get(PlanTypeName).newPlan(ProjectName, planName);
	}
}
