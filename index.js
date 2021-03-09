const inquirer=require('inquirer');
const fs=require('fs');

// array of questions for the users
const promptUser=() =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'Enter you team manager name?',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Enter your employee Id?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address?',
        },
        {

            type: 'input',
            name: 'officenumber',
            message: 'Enter your office phone number?',
        },
        {
            type: "list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [
                "Engineer",
                "Intern"
            ],
        },
                
    ])
}

const promptEngineer =() => {

}

const promptIntern =() => {
    
}