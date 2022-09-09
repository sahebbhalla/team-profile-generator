

const Engineer = require('../lib/Engineer');

test("Testing new Engineer Object",()=>{
    const eng = new Engineer("saheb",1,"sahib@gmail.com","Front-end","sahebBhalla");

    expect(eng.role).toBe("Front-end");
    expect(eng.gitHub).toBe("sahebBhalla");
    

})
