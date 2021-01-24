const input = require('readline-sync');
 
let firstNum = Number(input.question("Enter the first number: "));
let secondNum = Number(input.question("Enter the second number: "));

function makesTen(num1, num2) {
   if (num1 + num2 === 10 )
   {
      console.log("makes 10");
   }
   else
   {
      console.log("nope");
   }
 }
 
makesTen (firstNum, secondNum);