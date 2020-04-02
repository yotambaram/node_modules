
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
        message: 'Insert your project title',
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
        type: 'input',
        message: 'What is badge?',
        name: 'NA'
    }  
]


exports.readme =  function(answers) {
    return `
    
    # ${answers.projectName}

    ## details:
    * name ${answers.name}
    * Picture link: ${answers.picture}
    Email : ${answers.email}
    Github user name: ${answers.githubUserName}
    Project: ${answers.projectName}
    Project Description: ${answers.projectDescription}
    Instructions: ${answers.instructions}
    Usage: ${answers.usage}
    Contributing${answers.contributing}`
}