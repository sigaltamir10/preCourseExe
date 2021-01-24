const input = require('readline-sync');
let intNumber;

while ((intNumber < 1) || !(Number.isInteger(intNumber)))
{
    intNumber = Number(input.question("Please enter a positive integer: "));
}

function randomArray(len)
{
    let arr=[];

    for (let i=0; i < len; i++)
    {
        // generates a number from 1-50
        arr.push(Math.floor(Math.random()*50) + 1);
    }
    console.log("Array = ",arr);
    console.log("The minimum number is: ",Math.min(...arr));
    console.log("The maximum number is: ",Math.max(...arr));
}

randomArray(intNumber);