const logo = require('figlet');
const input = require('readline-sync');

logo('Hang Man !', function(err, data)
{
    if (err)
    {
        console.log('Something went wrong ...');
        console.dir(err);
        return;
    }
    console.log(data)
})

let text=["dog","cat","apple","stone","banana"];

let keyword = Math.floor((Math.random()*text.length));
let chosenWord = text[keyword];
let progressWord = [];
let wordLength= chosenWord.length;
let guessesLeft;

for (let i = 0; i < wordLength; i++)
  progressWord.push('*');

for (let i=0, guessesLeft = 10-i; i < 10; i++, guessesLeft--)
{
    console.log("You have", guessesLeft, "guesses");
    console.log("The word is:", progressWord.join(""));

    let inputChar = input.keyIn("What is your guess (please type a single letter)? ", {limit: '$<a-z>'});
    inputChar = inputChar.toLowerCase();

    if (chosenWord.indexOf(inputChar) != -1) // if the character is found
    {
        for (let i=0; i < wordLength; i++)
        {
            if (chosenWord[i] == inputChar)
            {
                progressWord[i] = chosenWord[i];
            }
        }

        if (progressWord.indexOf('*') == -1)
        {   // if there are no asterisks left
            console.log("Wow you are good !!!");
            console.log("The word is:", progressWord.join(""));
            break;
        }
    }
    if (guessesLeft <= 1)
    {
        console.log("You didn't guess the word. Maybe next time :)");
    }
}