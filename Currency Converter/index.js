#! /usr/bin/env node
import inquirer from "inquirer";
let loop = true;
let Convertion = {
    "PKR": {
        "USD": 0.004434589800443458980044345898,
        "GBP": 0.0037,
        "PKR": 1,
        "AED": 0.013
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1,
        "AED": 0.013
    },
    "USD": {
        "PKR": 298.50,
        "GBP": 0.83,
        "USD": 1,
        "AED": 3.67
    },
    "AED": {
        "PKR": 78.34,
        "GBP": 0.22,
        "AED": 1
    }
};
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", "GBP", "USD", "AED"],
            message: "Select your Currency : "
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "GBP", "USD", "AED"],
            message: "Select your Convertion Currency : "
        },
        {
            type: "number",
            name: "amount",
            message: "Select your Convertion amount : "
        },
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = Convertion[from][to] * amount;
        console.log(`Your convertion from ${from} to ${to} is ${result}`);
    }
    else {
        console.log("Invaild number");
    }
    const restart = await inquirer.prompt([
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to again Try:? ",
            default: false
        }
    ]);
    const { addmore } = restart;
    loop = addmore;
}
