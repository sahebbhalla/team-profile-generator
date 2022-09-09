const Team = require("./lib/Team");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require('fs');
var count =0;
var totalTeams;
const teams = [];
const addTeamMembers = [
    {
      name: "member",
      message: "Please select which team memeber would you like to Add ?",
      type: "list",         
       choices:["Intern","Engineer","Exit this Team config"]
      }
  ];
function app() {
  inquirer
    .prompt([
      {
        type: "text",
        message: "How many teams do you have ?",
        name: "teams",
      },
    ])
    .then((answers) => {
      totalTeams = answers.teams;
        createTeam();

    });
}
function createTeam() {
    
  const ask = () => {
    inquirer
      .prompt([
        {
          type: "text",
          message: "What is the name of this team ?",
          name: "teamname",
        },
        {
          type: "text",
          message: "Please enter the name of the Manager",
          name: "manager",
        },
        {
          type: "text",
          message: "Please enter the Manager's ID",
          name: "managerID",
        },
        {
          type: "text",
          message: "Please enter the Manager's email Adress",
          name: "managerEmail",
        },
        {
          type: "text",
          message: "Please enter Managers Office Number",
          name: "managerOfficeNumber",
        },
      ])
      .then((answers) => {
        console.log("here")
        const team = new Team( answers.teamname,
          new Manager(answers.manager,answers.managerID,answers.managerEmail,answers.managerOfficeNumber));
        createTeamMembers(team);
    
      });
  };
  if(count<totalTeams){
    count++;
    ask();
  }
  else{
    createHTML(teams);
  }
}
function createTeamMembers(team){
    inquirer.prompt(addTeamMembers)
    .then(function(userInput){
        switch(userInput.member){
        case "Intern":
            internQuestion(team);
            break;
        case "Engineer":
            engineerQuestion(team);
            break;
        case "Exit this Team config":
            teams.push(team);
            console.log(teams);
            createTeam();
        default:
            break;
        }
        })
}
  

function markDown(data){
    
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team info</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="/src/styles.css">
    </head>
    <body>
        <h1 id ="header"> Welcome to team builder application</h1>
        <div class ="teamsContainer">
        ${data
            .filter(({ manager}) =>manager)
            .map(({ teamName,manager,engineerArray,internArray }) => {
                return `
              <div class ="teamContainer">
                <h1 class= "teamName">Team ${teamName}</h1>
                <div class ="teamMembers">
                <div class="card" style="width: 18rem;">
                    <div class="card-body manager-card">
                        <h5 class="card-title">${manager.name}<br><i class="fa fa-coffee"></i> Manager</h5>
                        <ul class="card-text">
                            <li>Manager Id -${manager.id}</li>
                            <li>Manager officeNumber${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
                <div id ="engineerContainer">
                ${engineerArray.filter((engineer)=>engineer).map((engineer)=>{
                    return`
                    <div class ="engineer">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${engineer.name}<br><i class="fa fa-glasses"></i> Engineer</h5>
                                <ul class="card-text">
                                    <li>Engineer Id -${engineer.id}</li>
                                    <li>Engineer Email${engineer.email}</li>
                                    <li>GitHub -${engineer.gitHub}</li>
                                </ul>
                        </div>
                        </div>
                    </div>
                    `
                }).join('')}
                </div>
              
                <div class ="internContainer">
                ${internArray.filter((intern)=>intern).map((intern)=>{
                    return`
                    <div class="intern"> 
                        <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${intern.name}<br><i class='fa fa-user-graduate'></i> Intern</h5>
                                <ul class="card-text">
                                    <li>Intern Id - ${intern.id}</li>
                                    <li>Intern Email - ${intern.email}</li>
                                    <li>School Name -${intern.school}</li>
                                </ul>
                        </div>
                        </div>
                    </div>
                    `
                }).join('')}
                </div>
                </div>
                </div>
                `;
            })
            .join('')}
               
            </div>
    </body>
    </html>
    `
    }
 
function createHTML(teams){
    fs.writeFile('./dist/index.html',markDown(teams),(err)=>{
        if (err) throw err;
        console.log("File saved");
      })
}
const internQuestion = (team) => {
    inquirer.prompt([ 
      {
        type: "text",
        message: "Please enter the name of the Intern",
        name: "intern",
      },
      {
        type: "text",
        message: "Please enter the Intern's ID",
        name: "internID",
      },
      {
        type: "text",
        message: "Please enter the Intern's email Adress",
        name: "internEmail",
      },
      {
        type: "text",
        message: "Please enter the Intern's school Name",
        name: "schoolName",
      },
    ]).then(answers => {
        const intern = new Intern(answers.intern,answers.internID,answers.internEmail,answers.schoolName)
        team.addIntern(intern);
        createTeamMembers(team);
        })
    }
const engineerQuestion = (team) => {
        inquirer.prompt([ 
          {
            type: "text",
            message: "Please enter the name of the Engineer",
            name: "engineer",
          },
          {
            type: "text",
            message: "Please enter the Engineer's ID",
            name: "engineerID",
          },
          {
            type: "text",
            message: "Please enter the Engineer's email Adress",
            name: "engineerEmail",
          },
          {
            type: "text",
            message: "Please enter the Engineer's role",
            name: "engineerrole",
          },
          {
            type: "text",
            message: "Please enter the Engineer's Github Account",
            name: "engineerGithub",
          }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineer,answers.engineerID,answers.engineerEmail,answers.engineerRole,answers.engineerGithub)
            team.addEngineer(engineer);
            createTeamMembers(team);
            })
        }

app();
