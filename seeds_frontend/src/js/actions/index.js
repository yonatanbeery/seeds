export function getBitbucketProjects() {
    return {type: "GET_BITBUCKET_PROJECTS", payload: {url:"http://localhost:8080/bitbucket/allProjects"}}
}