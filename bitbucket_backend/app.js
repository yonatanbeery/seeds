const express = require('express')
const app = express()
const port = 4444

var newPlan = require('./newPlan.js')
console.log(newPlan)

app.get('/', (req, res) => {
    res.send(newPlan.data.hello());
})

app.get('/newPlan', (req, res) => {
    res.send(newPlan.data.CreateRepo());
})

app.get('/allProjects', (req, res) => {
    res.send(newPlan.data.allProjects());
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))