const Employee = require('../lib/Employee')

test("Creating new Employee instance",()=>{
    const employee = new Employee("Dave",1,"test@gmail.com");

    expect(employee.name).toBe("Dave");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("test@gmail.com");




})
test("Testing return methods",()=>{
    const employee = new Employee("Dave",1,"test@gmail.com")
    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
})