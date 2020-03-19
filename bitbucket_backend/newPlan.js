const request = require('request');
const BASE_PROJECT = 'DEVP' // project key

const user = 'yonatanbeery';
const password = 'yB1234561';

let projectKeysMap = new Map();
let planTypesMap = new Map();

const allProjects = (callback) => {
    request.get({
        url: 'http://localhost:7990/rest/api/latest/projects',                 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + Buffer.from(user + ':' + password).toString('base64')
        }
    }, (error, res, data) => {
        if (error) {
            console.error(error);
            return
        }
        console.log(`statusCode: ${res.statusCode}`);
        callback(null, JSON.parse(data).values);
    });
};

const setPlanTypes = () => {
    planTypesMap.set("Express", "express");
    planTypesMap.set("Nodejs", "nodejs");
};

setPlanTypes();
allProjects((err, data) => {
    data.forEach(project => {
        projectKeysMap.set(project.name, project.key);
    });
});

var methods = {};

methods.CreateRepo = (projectName, newRepoName, planType) => {
        /*request.post(
            {
                url: `http://localhost:7990/rest/api/latest/projects/${projectKeysMap.get(projectName)}/repos`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + Buffer.from(user + ':' + password).toString('base64')
                },
                body: JSON.stringify({
                    "name": newRepoName
                })
            },
            (error, res, body) => {
                if (error) {
                    console.error(error);
                    return
                }
                console.log(`statusCode: ${res.statusCode}`);
                console.log(body);
                return body
            });*/

            request.post(
                {
                    url: `http://localhost:7990/rest/api/latest/projects/${BASE_PROJECT}/repos/${planTypesMap.get(planType)}`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + Buffer.from(user + ':' + password).toString('base64')
                    },
                    body: JSON.stringify({
                        "name": newRepoName,
                        "project":{"key": projectKeysMap.get(projectName)}
                    })
                },
                (error, res, body) => {
                    if (error) {
                        console.error(error);
                        return
                    }
                    console.log(`statusCode: ${res.statusCode}`);
                    console.log(body)
                });
                return "success";
    };

methods.hello = () => {
    return('hello')
};

methods.allProjects = allProjects;

exports.data = methods;