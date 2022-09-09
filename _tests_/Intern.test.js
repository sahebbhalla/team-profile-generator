
const Intern = require('../lib/Intern');

test("Testing Intern Object",()=>{
    const intern = new Intern("saheb",1,"sahib@gmail.com","UOFT")
    expect(intern.school).toBe("UOFT");
})
