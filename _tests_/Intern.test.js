
const Intern = require('../lib/Intern');

test("Testing Intern Object",()=>{
    const intern = new Intern("UOFT")
    expect(intern.school).toBe("UOFT");
})
test("Testing return methods",()=>{
    const intern = new Intern("UOFT")
    expect(intern.getSchool()).toBe("UOFT");
})