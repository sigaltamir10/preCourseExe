const input = require('readline-sync');
let intNumber;

function factorial(integer) 
{
   if (integer === 1)
   {
        return integer;
   }
   
   return integer*(factorial(integer-1));
}

while ((intNumber < 1) || !(Number.isInteger(intNumber)))
{
    intNumber = Number(input.question("Please enter a positive integer: "));
}

console.log("The factorial of", intNumber, "is : " + factorial(intNumber));