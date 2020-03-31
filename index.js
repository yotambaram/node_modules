const inquirer = require('inquirer');
const axios = require('axios');
const fs = require("fs");



inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is Github user name??',
        name: 'GithubUserName'
    }]
).then(function(res){
    //console.log(response)
    let userName = res.GithubUserName
    axios.get(`https://api.github.com/users/${userName}`)
    .then(function(response){
        let gitHubEmail = response.data.email
        let gitHubPic = response.data.avatar_url
        inquirer.prompt([
                {
                  type: 'input',
                  message: 'Insert your project title',
                  name: 'projectName'
                },
                {
                    type: 'input',
                    message: 'Insert your project description',
                    name: 'projectDescriptionName'
                },
                {
                    type: 'input',
                    message: 'Input yout installtion instructions',
                    name: 'instructions'
                },
                {
                    type: 'input',
                    message: 'How to use it',
                    name: 'usage'
                },
                {
                    type: 'input',
                    message: 'How can you hlp this project?',
                    name: 'contributing'
                },
                {
                    type: 'input',
                    message: 'test??????',
                    name: 'test'
                }         
                
            
        ]).then(function(answers){
            console.log(answers, res)
            const dataString = 
            `
            name: ${res.userName}
            this is your test answer: ${answers.test}
            `
            fs.writeFile('textREADME.md', dataString, function(err){
                if(err){
                    console.log(err)
                }
            }) 

        })
    })
})



