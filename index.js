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
       
                
    ])
}

const promptMenu=()=>{
    return inquirer.prompt([
        {
            type: "list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add anymore team members",
            ],
        },
    ])
}

const promptEngineer =() => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'engineer',
        message: 'What is the engineer name?',
    },
    {
        type: 'input',
        name: 'engID',
        message: 'Enter your engineer Id?',
    },

    {
        type: 'input',
        name: 'engemail',
        message: 'Enter engineer email address?',
    },
    {

        type: 'input',
        name: 'enggit',
        message: 'Enter engineer GitHub user name?',
    }
])
}

const promptIntern =() => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'intern',
            message: 'What is the Intern name?',
        },
        {
            type: 'input',
            name: 'intID',
            message: 'Enter your Intern Id?',
        },
    
        {
            type: 'input',
            name: 'intemail',
            message: 'Enter Intern email address?',
        },
        {
    
            type: 'input',
            name: 'school',
            message: 'Enter school name?',
        }
    ])
    
}

// function to initialize program
function addMember(){
    
}
