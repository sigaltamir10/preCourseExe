const input = require('readline-sync');
let inputStr = input.question("Please enter a string: ");

let regExp = /^[a-z]+$/i;
let longestWord ="";
let arr = inputStr.split(" ");

for (let i=0, y = arr.length; i < y; i++)
{
    if (arr[i].match(regExp))
    {
        if (arr[i].length > longestWord.length)
        {
            longestWord = arr[i];
        }
    }
}

console.log("The longest word is: ", longestWord);