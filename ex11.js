function reverse(str)
{
  return str.split('').reverse().join('');
}

function isPalindrome(str)
{
  return reverse(str) === str;
}

const input = require('readline-sync');
let inputStr = input.question("Please enter a string: ");

if (isPalindrome(inputStr))
{
    console.log(inputStr + " is a palindrome");
}
else
{
    console.log(inputStr + " isn't a palindrome");
}