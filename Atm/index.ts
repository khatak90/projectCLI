import inquirer from "inquirer";

interface ansType{
 
    userID:  string,
    userPIN: number,
    accountType : string,
    transactionType: string,
    amount: number
}


const answers : ansType = await inquirer.prompt([
     
    {
        type: "input",
        name: "userID",
        message: "Kindely Enter your ID"
    },

    {
        type: "number",
        name: "userPIN",
        message: "Kindely Enter your PIN"
    },

    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type:",
       
    },

    {
        type: "list",
        name: "transactionType",
        choices:["Fast Cash" , "Withdraw"],
        message:"Select your transaction :",
       
        when(answers) {
           
            return answers.accountType
        }, 
    },
     
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000 , 10000, 20000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash"
        },
    },

    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "Withdraw"
        },
    }
      
   
])

 if ( answers.userID && answers.userPIN) {
   
     const balance = Math.floor(Math.random()*100000000);
    
     console.log(balance)
      
     const EnterAmount = answers.amount;
      
     if( balance >= EnterAmount){
       
        const remianing = balance - EnterAmount;
        console.log( "Your remaining balance is", remianing)
        
     }

     else{

        console.log("Insuficient Balance")
     }
 } 