

const Manager = require("../lib/Manager")

test("Test Manager object",()=>{
    const manager = new Manager("saheb",1,"sahib@gmail.com",1)
    expect(manager.name).toBe("saheb")
    expect(manager.id).toBe(1)
    expect(manager.email).toBe("sahib@gmail.com");
    expect(manager.officeNumber).toBe(1);
})

