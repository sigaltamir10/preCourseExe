const input = require('readline-sync');

let intNumber;

do
{
    intNumber = Number(input.question("Please choose an integer number larger than 10: "));
    console.log("User's answer: ", intNumber);

} while ((intNumber <= 10) || !(Number.isInteger(intNumber)))

console.log("Thank you");