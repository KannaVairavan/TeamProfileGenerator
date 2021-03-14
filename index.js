const inquirer=require('inquirer');
const fs=require('fs');
const teamMembers=[];

// Constructors

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function init() {
     promptManager();
    
}

// array of questions for the users
 const promptManager=() =>{

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's Id?",
        },

        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email?",
        },
        
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office Number?",
        },
        
                      
    ]).then((data) => {
        teamMembers.push(

            new Manager(data.name, data.id, data.email, data.officeNumber, "Manager"));

             promptTeamMember();
            
    
        
      });
    }
const promptTeamMember=()=>{
    return inquirer.prompt([
        {
            type: "list",
            message: "Add team member?",
            name: "Member",
            choices: [
                "Engineer",
                "Intern",
                "I'm done. Build HTML"
                
            ],
        },
    ]).then(empData => {
                
        if(empData.Member==="Intern"){
            
            promptIntern();
        } else if (empData.Member==="Engineer"){
           
            promptEngineer();
        
         } else {
             console.log(teamMembers);
             generateHTML();
         }

    });
}

const promptEngineer =() => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's Id?",
        },

        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email?",
        },
    {

        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub user name?",
    },
    
]).then((data) => {
    teamMembers.push(
        new Engineer(data.name, data.id, data.email, data.github, "Engineer")
    );
     promptTeamMember();
    });
}

const promptIntern =() => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's Id?",
        },

        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email?",
        },
        
        {
    
            type: 'input',
            name: 'school',
            message: "Enter school you are currently attending?",
        },
        
    ]).then((data) => {
        teamMembers.push(
            new Intern(data.name, data.id, data.email, data.school, "Intern")
        );
         promptTeamMember();

    })
}  


function getHTMLModule(file) {
    return readFile(file, "utf8");
}

async function generateHTML() {
    let Template = {
        Main: await getHTMLModule("./templates/main.html"),
        Manager: await getHTMLModule("./templates/manager.html"),
        Engineer: await getHTMLModule("./templates/engineer.html"),
        Intern: await getHTMLModule("./templates/intern.html")
    }

    let employeesHTML = "";

    for (let employee of teamMembers) {
        let html = Template[employee.constructor.name]
        .replace(/{% name %}/gi, employee.name)
        .replace(/{% id %}/gi, employee.id)
        .replace(/{% email %}/gi, employee.email);
        switch (employee.constructor.name) {
            case "Manager":
                html = html.replace(/{% officeNumber %}/gi, employee.officeNumber);
                break;
            case "Engineer":
                html = html.replace(/{% github %}/gi, employee.github);
                break;
            case "Intern":
                html = html.replace(/{% school %}/gi, employee.school);
                break;
        }
        employeesHTML += html;
    }
    let completeHTML = Template["Main"].replace(/{% employees %}/gi, employeesHTML);

    createHTML(completeHTML);
}

async function createHTML(html) {
    console.log("Creating HTML...");
    let file = `team-member.html`;
    let dir = "./output";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    await writeFile(`${dir}/${file}`, html);
    console.log(`HTML has been created to "${dir}/${file}".`);
    return;
}



init();

