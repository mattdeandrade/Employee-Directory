// TODO: this file :)
const employees = require("./employees");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  let rando = Math.floor(Math.random() * 10);
  res.json(employees[rando]);
});

app.get("/employees/:index", (req, res) => {
  const { index } = req.params;
  if (index < 0 || index >= employees.length) {
    res.status(404).send("An employee with the given id does not exist.");
  } else {
    res.json(employees[index]);
  }
});
