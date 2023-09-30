#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loops = true;
while (loops) {
    const questions = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: " What do you want to add here : "
        },
        {
            type: "confirm",
            name: "AddMore",
            message: "Do you want to add more Todo here: ",
            default: false,
        }
    ]);
    const { TODO, AddMore } = questions;
    //console.log(questions);
    loops = AddMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log(" Kindly add vaild input");
    }
    if (todos.length > 0) {
        console.log("Your ToDo List");
        todos.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log("No Todos Founds");
    }
}
