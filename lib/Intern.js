const Employee = require('../lib/Employee')

class Intern extends Employee{
    constructor(school){
        super()
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return this
    }
}

module.exports =Intern