
const Employee = require("./Employee");
const Intern = require("./Intern");



class Team{

    constructor(teamName,manager){
        this.teamName=teamName;
        this.manager=manager;
        this.internArray = [];
        this.engineerArray=[];
    }
    addIntern(intern){
        this.internArray.push(intern)
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
