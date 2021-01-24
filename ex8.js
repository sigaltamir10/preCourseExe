let boomString = "";

for (let num = 1; num <= 100; num++)
{
    if ((num % 7 === 0) || String(num).match("7"))
    {
        boomString = boomString + ", BOOM";
    }
    else
    {
        boomString = boomString + ", " + String(num);
    }
}

console.log(boomString.substr(2));