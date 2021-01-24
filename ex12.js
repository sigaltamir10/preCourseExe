const input = require('readline-sync');
let origString = input.question("Please enter a string: ");

let modifiedString = origString;
let vowels = ["a", "e", "i", "o", "u", "y"];

for (let i = 0, y = vowels.length; i < y; i++)
{
    regExp = vowels[i];
    modifiedString = modifiedString.split(regExp).join(vowels[i].toUpperCase());
}

console.log("Original string: ", origString);
console.log("Modified string: ", modifiedString);