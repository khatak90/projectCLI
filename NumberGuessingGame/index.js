#! /usr/bin/env node
import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGusse",
        message: "write your guess number"
    }
]);
const { userGusse } = answer;
console.log(userGusse, " Is Your number", systemGeneratedNo, 'This is correct number');
if (userGusse === systemGeneratedNo) {
    console.log("your answer is correct");
}
else {
    console.log("please try again");
}
async function startAgain() {
    do {
        console.log(userGusse, " Is Your number", systemGeneratedNo, 'This is correct number');
        var restart = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to restart? Yes or No",
        });
    } while (restart.restart.toLowerCase() === "yes" ||
        restart.restart.toLowerCase() === "y");
}
startAgain();
