package com.bamboo_spec;

import java.io.IOException;

import com.atlassian.bamboo.specs.api.BambooSpec;
import com.atlassian.bamboo.specs.api.builders.plan.Job;
import com.atlassian.bamboo.specs.api.builders.plan.Plan;
import com.atlassian.bamboo.specs.api.builders.plan.PlanIdentifier;
import com.atlassian.bamboo.specs.api.builders.plan.Stage;
import com.atlassian.bamboo.specs.api.builders.project.Project;
import com.atlassian.bamboo.specs.api.exceptions.PropertiesValidationException;
import com.atlassian.bamboo.specs.builders.task.ScriptTask;
import com.atlassian.bamboo.specs.util.BambooServer;
import com.atlassian.bamboo.specs.api.builders.permission.Permissions;
import com.atlassian.bamboo.specs.api.builders.permission.PermissionType;
import com.atlassian.bamboo.specs.api.builders.permission.PlanPermissions;

/**
 * Plan configuration for Bamboo.
 * Learn more on: <a href="https://confluence.atlassian.com/display/BAMBOO/Bamboo+Specs">https://confluence.atlassian.com/display/BAMBOO/Bamboo+Specs</a>
 */
@BambooSpec
public class PlanSpec {
	public static String projectName;
	public static String planName;
	public static String planKey;

    /**
     * Run createPlan to publish plan on Bamboo
     */
    public static void main() throws Exception {
        //By default credentials are read from the '.credentials' file.
    }

    public static String createPlan(String projectName, String planName, String planKey) throws IOException {
        PlanSpec.projectName = projectName;
        PlanSpec.planName = planName;
        PlanSpec.planKey = planKey;

    	BambooServer bambooServer = new BambooServer("http://localhost:8085");
        
        if (bamboo_api.isUsedPlanKey(projectName, planName, planKey)) {
			return "creation failed.";
		}
        
        Plan plan = new PlanSpec().Plan();

        bambooServer.publish(plan);

        PlanPermissions planPermission = new PlanSpec().createPlanPermission(plan.getIdentifier());

        bambooServer.publish(planPermission);
        
        return "successfuly created plan " + planName;
    }
    
    PlanPermissions createPlanPermission(PlanIdentifier planIdentifier) {
        Permissions permission = new Permissions()
                .userPermissions("yonatanbeery", PermissionType.ADMIN, PermissionType.CLONE, PermissionType.EDIT)
                .groupPermissions("bamboo-admin", PermissionType.ADMIN)
                .loggedInUserPermissions(PermissionType.VIEW)
                .anonymousUserPermissionView();
        return new PlanPermissions(planIdentifier.getProjectKey(), planIdentifier.getPlanKey()).permissions(permission);
    }

    Project project() throws PropertiesValidationException, IOException {
        return new Project()
                .name(projectName)
                .key(bamboo_api.getProjectKey(projectName));
    }

    Plan Plan() throws PropertiesValidationException, IOException {
        return new Plan(
                project(),
                planName, planKey)
                .description("this plan was created with the server of john")
                .stages(new Stage("some stage").jobs(new Job("run","RUN").tasks(new ScriptTask().inlineBody("echo hello world"))));
    }


}
