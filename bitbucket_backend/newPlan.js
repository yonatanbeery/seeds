const request = require('request');

const user = 'yonatanbeery';
const password = 'yB1234561';

var methods = {};

methods.CreateRepo = () => {
        request.post(
            {
                url: 'http://localhost:7990/rest/api/latest/projects/LAP/repos',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + Buffer.from(user + ':' + password).toString('base64')
                },
                body: JSON.stringify({
                    "name": "test repo2"
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
            });
    };

methods.hello = () => {
    return('hello')
};

methods.allProjects = () => {
    request.get({url: 'http://localhost:7990/rest/api/latest/projects'}, (error, res, data) => {
        if (error) {
            console.error(error);
            return
        }
        console.log(`statusCode: ${res.statusCode}`);
        console.log(JSON.parse(data).values)
        return(JSON.parse(data).values);
    });
};

exports.data = methods;