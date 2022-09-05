

const Manager = require("../lib/Manager")

test("Test Manager object",()=>{
    const manager = new Manager(1)

    expect(manager.officeNumber).toBe(1);
})

// test("testing return function",()=>{
//     const manager = new Manager(1);
//     expect(manager.getRole()).toEqual(expect(manager.officeNumber).toBe(1))
// })