
const Employee = require("./Employee");
const Intern = require("./Intern");



class Team{

    constructor(teamName,manager){
        this.teamName=teamName;
        this.manager=manager;
        this.internArray = [];
        this.engineerArray=[];
    }
    addintern(intern){
        this.internArray.push(intern)
    }
    addManager(manager){
        this.managerArray.push(manager)
    }
    addEngineer(engineer){
        this.engineerArray.push(engineer)
    }

    getInterns(){
        return this.internArray;
    }
    getManager(){
        return this.managerArray;
    }
    getEngineer(){
        return this.engineerArray;
    }

}
module.exports=Team;