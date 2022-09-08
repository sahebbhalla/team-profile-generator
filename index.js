const Team = require("./lib/Team");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const teams = [];
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
      createTeam(answers.teams);
    });
}
function createTeam(number) {
  let loop = number;
  let count = 0;
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
        {
          type: "text",
          message: "How many team members does this Manager oversee ?",
          name: "members",
        },
      ])
      .then((answers) => {
        const team = new Team( answers.teamname,
          new Manager(answers.manager,answers.managerID,answers.managerEmail,answers.managerOfficeNumber));
        console.log(team);
        const teamMembers =answers.members;
        console.log(teamMembers +"need to be added ");
        const membersAdded =0;
        const teamQuestions = () => {
          inquirer.prompt([
            {
              type: "list",
              name: "member",
              message: "Please select which team memeber would you like to Add ?",
             choices:['Intern','Engineer',"Exit this Team's config"]
            },
          ]).then((member)=>{
            console.log(member);
            if( member == "Exit this Team's config"){
                return
            }
            else if(member== "Intern"){
                membersAdded=+1;
                inquirer.prompt([ {
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
                ]).then((answers)=>{
                    const intern = new Intern(answers.intern,answers.internID,answers.internEmail,answers.schoolName)
                    team.addintern(intern);
                    if(membersAdded<teamMembers){
                        teamQuestions();
                    }
                })
            }
            else if(member == "Engineer"){
                membersAdded=+1
                if(membersAdded<teamMembers){
                    teamQuestions();
                }
            }


          });
        };
        if(membersAdded<teamMembers){
            console.log("worked")
            teamQuestions();
        }
        count++;
        teams.push(team);
        if (count < loop) {
          ask();
        }
      });
  };
  ask();
}

app();
