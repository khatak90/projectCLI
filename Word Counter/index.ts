import inquirer from "inquirer";


const question:{ Sentence:String } = await inquirer.prompt([

     {
        type:"input",
        name:"Sentence",
        message:" Enter Your Sentence to Count the Word: ",
     }
])

const word = question.Sentence.trim().split("")

console.log(`Your sentence word count is ${word.length}`)

