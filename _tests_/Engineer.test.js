

const Engineer = require('../lib/Engineer');

test("Testing new Engineer Object",()=>{
    const eng = new Engineer("Front-end","sahebBhalla");

    expect(eng.role).toBe("Front-end");
    expect(eng.gitHub).toBe("sahebBhalla");
    

})
test("Testing return methods",()=>{
    const eng = new Engineer("Front-end","sahebBhalla");
    expect(eng.getGithub()).toBe("sahebBhalla");
})