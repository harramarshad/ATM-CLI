import { awaitExpression } from "@babel/types";
import inquirer from "inquirer";

interface anstype{
    userID:string
    userPin:number
    amount:number
};
const answer : anstype = await inquirer.prompt ([
    {
        type: "input",
        name: "UserID",
        message: "Please enter your ID",
    },
    {
        type: "number",
        name:"userPin",
        message: 'Please enter your pin:'

    },
    {
        type: "list",
        name:"amount",
        choices:['Fast cash',"With draw"],
        message: 'Select your transdaction',
        when(answer){
            return answer.accountType
        },
    },
    {
        type: "number",
        name:"amount",
        choices: [2000,5000,10000,50000],
        message:"Select you amount",
        when(answer){
            return answer.transdactionType == "Fast cash"
        },

    }
]);

if(answer.userID && answer.userPin){
    const balance = Math.floor(Math.random() * 1000000);
    console.log(balance)
    const EnterAmount = answer.amount;
    if (balance < EnterAmount){
      const remaining = balance - EnterAmount;
      console.log("Your remaining balance is", remaining)
    }else{
        console.log("Insufficient balance")

    }
}




