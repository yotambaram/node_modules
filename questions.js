
exports.quest = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is Github user name?',
        name: 'githubUserName'
    },
    {
        type: 'input',
        message: 'Insert your project name?',
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'Insert your project description',
        name: 'projectDescription'
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
        message: 'How can you help this project?',
        name: 'contributing'
    },
    {
        type: 'list',
        choices: ['blue', 'red', 'yellow', 'green'],
        message: 'What is favorite color?',
        name: 'color'
    }  
]



exports.readme =  function(answers) {
    return (`
# ${answers.projectName}
* name ${answers.name}
*Email : ${answers.email}
*Github user name: ${answers.githubUserName}
*Project name: ${answers.projectName}
*Project Description: ${answers.projectDescription}
*Instructions: ${answers.instructions}
*Usage: ${answers.usage}
*Contributing: ${answers.contributing}
*![badge](https://img.shields.io/static/v1?label=Version&message=1.0&color=${answers.color})
Picture link: ![badge](${answers.pic})
`)
}