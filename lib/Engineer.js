
const Employee = require('../lib/Employee')
class Engineer extends Employee{
    constructor(role,gitHub){
        super()
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