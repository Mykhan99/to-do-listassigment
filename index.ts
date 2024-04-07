#!/usr/bin/env node

import inquirer from "inquirer";

let toDo = []
let condition = true;

while (condition) {
let taskAdd = await inquirer.prompt([{
    message:  "What is your to do list?",
    type:      "input",
    name:      "toDoList"},
 
    {
    message:  "You want to add more?",
    type:      "confirm",
    name:      "addMore",
    default:    "false"}
   
 
    ]);
toDo.push(taskAdd.toDoList);
condition = taskAdd.addMore; 
}
toDo = toDo.concat();
console.log(toDo); 
 