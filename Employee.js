'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
  }

  promote(title, salary) {
    this.title = title
    this.salary = salary

  }
  
  // TODO ???
}

// TODO ???
Employee.parseFromFilePath = (path) => {
  const jsonEmployee = JSON.parse(fs.readFileSync(path))
  return new Employee(jsonEmployee.name, jsonEmployee.title, jsonEmployee.salary)

}



module.exports = {
  Employee
}
