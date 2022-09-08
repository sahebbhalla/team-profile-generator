const Team = require("./lib/Team");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require('fs');

const teams = [];


// function app() {
//   inquirer
//     .prompt([
//       {
//         type: "text",
//         message: "How many teams do you have ?",
//         name: "teams",
//       },
//     ])
//     .then((answers) => {
//       createTeam(answers.teams);
//     });
// }
// function createTeam(number) {
//   let loop = number;
//   let count = 0;
//   const ask = () => {
//     inquirer
//       .prompt([
//         {
//           type: "text",
//           message: "What is the name of this team ?",
//           name: "teamname",
//         },
//         {
//           type: "text",
//           message: "Please enter the name of the Manager",
//           name: "manager",
//         },
//         {
//           type: "text",
//           message: "Please enter the Manager's ID",
//           name: "managerID",
//         },
//         {
//           type: "text",
//           message: "Please enter the Manager's email Adress",
//           name: "managerEmail",
//         },
//         {
//           type: "text",
//           message: "Please enter Managers Office Number",
//           name: "managerOfficeNumber",
//         },
//         {
//           type: "text",
//           message: "How many team members does this Manager oversee ?",
//           name: "members",
//         },
//       ])
//       .then((answers) => {
//         const team = new Team( answers.teamname,
//           new Manager(answers.manager,answers.managerID,answers.managerEmail,answers.managerOfficeNumber));
//         console.log(team);
//         const teamMembers =answers.members;
//         console.log(teamMembers +"need to be added ");
//         const membersAdded =0;
//         const teamQuestions = () => {
//           inquirer.prompt(
//             {
//               type: "list",
//               name: "member",
//               message: "Please select which team memeber would you like to Add ?",
//              choices:["Intern","Engineer","Exit this Team's config"]
//             }
//           ).then(({member})=>{
//             console.log(member);
        
//             if(member == "Intern"){
//                 membersAdded=+1;
//                 inquirer.prompt([ {
//                     type: "text",
//                     message: "Please enter the name of the Intern",
//                     name: "intern",
//                   },
//                   {
//                     type: "text",
//                     message: "Please enter the Intern's ID",
//                     name: "internID",
//                   },
//                   {
//                     type: "text",
//                     message: "Please enter the Intern's email Adress",
//                     name: "internEmail",
//                   },
//                   {
//                     type: "text",
//                     message: "Please enter the Intern's school Name",
//                     name: "schoolName",
//                   },
//                 ]).then((answers)=>{
//                     const intern = new Intern(answers.intern,answers.internID,answers.internEmail,answers.schoolName)
//                     team.addintern(intern);
//                     if(membersAdded<teamMembers){
//                         teamQuestions();
//                     }
//                 })
//             }
//             else if(member == "Engineer"){
//                 membersAdded=+1
//                 if(membersAdded<teamMembers){
//                     teamQuestions();
//                 }
//             }


//           });
//         };
//         if(membersAdded<teamMembers){
//             console.log("worked")
//             teamQuestions();
//         }
//         count++;
//         teams.push(team);
//         if (count < loop) {
//           ask();
//         }
//       });
//   };
//   ask();
// }

// app();

function markDown(data){
    console.log("test"+data);
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team info</title>
    </head>
    <body>
        <h1 id ="header"> Welcome to team builder application</h1>
        ${data
            .filter(({ manager}) =>manager)
            .map(({ teamName,manager,engineerArray,internArray }) => {
            // console.log(engineerArray)
                return `
              <h1>${teamName}</h2>
              <h2>${manager.name}<h2>
              <h3>Engineers In the Team</h3>
                ${engineerArray.filter((engineer)=>engineer).map((engineer)=>{
                    console.log(engineer)
                    return`
                    <h4>${engineer.name}</h4>
                    
                    `
                }).join('')}
                <h4>Interns<h4>
                ${internArray.filter((intern)=>intern).map((intern)=>{
                    console.log(intern)
                    return`
                    <h4>${intern.name}</h4>
                    `
                }).join('')}
                `;
            })
            .join('')}
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
const ManagerTeam1 = new Manager("saheb",1,"test@test.com",01);
const ManagerTeam2 = new Manager("saheb Bhalla",2,"test@test.com",02);

const team1 = new Team("Front-End",ManagerTeam1)
const team2 = new Team("back-end",ManagerTeam2)

const intern1 = new Intern("Bhalla",2,"s@test.com","UOFT");
const intern2 = new Intern("Bhalla",2,"s@test.com","UOFT");
team1.addintern(intern1);
team1.addintern(intern2);

const intern3 = new Intern("Bhalla",2,"s@test.com","UOFT");
const intern4 = new Intern("Bhalla",2,"s@test.com","UOFT");
team2.addintern(intern3);
team2.addintern(intern4);

const engineer1 = new Engineer("Eng Saheb 1",3,"S@test.com","QA","testAccount")
const engineer2 = new Engineer("Eng Saheb 2",3,"S@test.com","QA","testAccount")
team1.addEngineer(engineer1);
team1.addEngineer(engineer2)

const engineer3 = new Engineer("Saheb",3,"S@test.com","QA","testAccount")
const engineer4 = new Engineer("Saheb",3,"S@test.com","QA","testAccount")
team2.addEngineer(engineer3);
team2.addEngineer(engineer4);

teams.push(team1)
teams.push(team2)
console.log(teams);

    createHTML(teams);
