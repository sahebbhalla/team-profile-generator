
const Employee = require('../lib/Employee')
class Engineer extends Employee{
    constructor(name,id,email,role,gitHub){
        super(name,id,email)
        this.role = role;
        this.gitHub=gitHub;
    }

    getGithub(){
        return this.gitHub;
    }
    getRole(){
        return this
    }
}

module.exports = Engineer