const express = require('express')
const app = express()
const port = 4444

var newPlan = require('./newPlan.js')
console.log(newPlan)

app.get('/', (req, res) => {
    res.send(newPlan.data.hello());
})

app.get('/newPlan/:projectName/:newRepoName/:planType', (req, res) => {
    res.send(newPlan.data.CreateRepo( req.params.projectName, req.params.newRepoName, req.params.planType));
})

app.get('/allProjects', (req, res) => {
    newPlan.data.allProjects((err, data) => {
        projects = data.map((project) => {return project.name});
        console.log(projects);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(projects);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))