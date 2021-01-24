const input = require('readline-sync');

let re = / /gi;
let origString = input.question("Please enter a string: ");
let modifiedString = origString.replace(re,"*");

console.log("Original string: ", origString);
console.log("Modified string: ", modifiedString);