const inquirer=require('inquirer');
const fs=require('fs');
const teamMembers=[];

// Constructors

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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
            buildHTML(teamMembers);
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

function buildHTML(teamMember) {
    return new Promise(function(resolve, reject) {

        for (let i=0; i < teamMember.length; i++){

            const name = teamMember[i].name;
            const role = teamMember[i].role;
            const id = teamMember[i].id;
            const email = teamMember[i].email;

            let data = "";
            if (role === "Engineer") {
                const gitHub = teamMember[i].github;
                data = `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Engineer</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">GitHub: ${gitHub}</li>
                </ul>
                </div>
            </div>`;
            } else if (role === "Intern") {
                const school = teamMember[i].school;
                data = `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Intern</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
                </div>
            </div>`;
            } else {
                const officePhone = teamMember[i].officeNumber;
                data = `<div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                <h5 class="card-header">${name}<br /><br />Manager</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email Address: ${email}</li>
                    <li class="list-group-item">Office Phone: ${officePhone}</li>
                </ul>
                </div>
            </div>`
            }


        }
        
        
        fs.appendFile("./output/teamMember.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });

        fs.writeFile("./output/teamMember.html", data, function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    });

}

init();

