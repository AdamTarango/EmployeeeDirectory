// TODO: this file :)
const express = require('express')
const employees = require('./employees')
const app = express()
const PORT = 3000;

app.get(('/'), (req, res) => {
  res.send("Hello Employees!")
})

app.get(('/employees'), (req, res) => {
  res.send(employees)
})

app.get(('/employees/random'), (req, res) => {
  const number = Math.floor(Math.random() * employees.length)
  res.send(employees[number])
})

app.get(('/employees/:id'), (req, res) => {
  const { id } = req.params;
  const employee = employees.find((employee) => employee.id === +id)
  if (employee){
    res.send(employee)
  }
  else {
    res.send("404 employee not found")
  }
})

app.listen(PORT, () =>{
  console.log(`Listening on port ${PORT}.`)
})