const input = require('readline-sync');
let intNumber;
let primeString = "";

while ((intNumber < 1) || !(Number.isInteger(intNumber)))
{
    intNumber = Number(input.question("Please enter a positive integer: "));
}

for (let num=1; num <= intNumber; num++)
{
        let i;
        for (i = 2; i <= Math.floor(Math.sqrt(num)); i++)
        {
            if (num % i === 0)
            {
                break;
            }
        }

        if (i === Math.floor(Math.sqrt(num))+1)
            primeString = primeString + ", " + String(num);
}

console.log(primeString.substr(2));