'use strict'

const util = require('util')
const path = require('path')
const { Employee } = require('./Employee')

const employee =
  Employee
    .parseFromFilePath(
      path.resolve(__dirname, 'employee.json')
    )

console.log(`is Employee? ${employee instanceof Employee}`)
console.log(`parsed: ${util.inspect(employee)}`)

employee.promote('chief petty grunt', 10, path.resolve(__dirname, 'employee.json'))

console.log(`after promotion: ${util.inspect(employee)}`)
