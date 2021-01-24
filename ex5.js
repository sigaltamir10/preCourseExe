let oddString = "";

for (let num = 1; num <= 100; num++)
{
    if (num % 2 === 1)
    {
        oddString = oddString + ", " + String(num);
    }
}

console.log(oddString.substr(2));