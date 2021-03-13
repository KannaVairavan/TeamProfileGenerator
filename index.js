const inquirer=require('inquirer');
const fs=require('fs');
const teamMembers=[];

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
            name: 'ID',
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
        
       
                
    ]).then(function (Manager){
        teamMembers.push(
            new Manager(Manager.name, Manager.id, Manager.email, Manager.officeNumber)
        );
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
            render (teamMembers);
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
            name: 'ID',
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
    
]).then(function (Engineer){
    teamMembers.push(
        new Engineer(Engineer.name, Engineer.id, Engineer.email, Engineer.github)
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
            name: 'ID',
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
        
    ]).then(function (Intern){
        teamMembers.push(
            new Intern(Intern.name, Intern.id, Intern.email, Intern.school)
        );
         promptTeamMember();

    })
    
}

function buildHTML(teamMember) {
    return new Promise(function(resolve, reject) {
        const name = teamMember.getName();
        const role = teamMember.getRole();
        const id = teamMember.getId();
        const email = teamMember.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = teamMember.getGithub();
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
            const school = teamMember.getSchool();
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
            const officePhone = teamMember.getOfficeNumber();
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
        
        fs.appendFile("./output/teamMember.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });

}


