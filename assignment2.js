const input = require('readline-sync');
let maxBet = 50, minBet = 1, playerAmount = maxBet;

console.log("//////////------------ Welcome To War ------------\\\\\\\\\\");

let playerName = input.question("Please enter your name: ");
console.log("Hello", playerName, "!!! You currently have", maxBet, "dollars");

let playerBet=0;

while (playerAmount > 0)
{
    playerBet = Number(input.question("Place your bet for the next round between 1 to 50: "));

    if ((playerBet < minBet) || (playerBet > maxBet) || !(Number.isInteger(playerBet)))
    {
        console.log("I said between 1 to", maxBet, "and you typed", playerBet, "!!!",
                    "\nI don't play with liars !!! Bye");
                    return;             
    }
    else
    {
            let playerCard = Math.floor(Math.random()*12) + 1;
            let computerCard = Math.floor(Math.random()*12) + 1;

            console.log("Your card is", playerCard, "and my card is", computerCard);
            if (playerCard > computerCard)
            {
                playerAmount += playerBet;
                console.log("You won", playerBet, "dollars !!! and now you have", playerAmount, "dollars");                                                                                                                                                       
            }
            else
            {
                playerAmount -= playerBet;
                console.log("You lose", playerBet, "dollars !!! and now you have", playerAmount, "dollars");                                                                                                                                                      
            }

            if(playerAmount === 0 )
            {
                console.log("You are broke ... Bye Bye");
                return;
            }

            let decision = ["Play another round", "Leave with my money :-)"],
                index = input.keyInSelect(decision, "What would you like to do ? ");
            switch (index)
            {
                case 0:
                    console.log("Let's play another round !!!");
                    break;

                case 1:
                    console.log("You got left", playerAmount, "dollars. Bye !!!");
                    return;
                
                default:
                    console.log("You shouldn't get here");
                    throw "stop execution !";
            }      
    }
}