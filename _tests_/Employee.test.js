const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test')
const Employee = require('../lib/Employee')

test("Creating new Employee instance",()=>{
    const employee = new Employee();

    expect(employee.name).toBe(String);
    expect(employee.id).toBe(Number);
    expect(employee.email).toBe(String);
})