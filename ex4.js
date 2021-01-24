const input = require('readline-sync');

let people = Number(input.question("How many people are you going with ? "));

if ((people < 0) || !(Number.isInteger(people)))
    throw "stop execution !"; 

let Kosher = input.keyInYNStrict("Should it be Kosher ? ");
let Lemehadrin = false;

if (Kosher)
{
    Lemehadrin = input.keyInYNStrict("Should it be Kashrut Lemehadrin ? ");
    if (Lemehadrin)
    {
        console.log("Kashrut Lemehadrin food");
    }
    else
    {
        console.log("Kosher food");
    }
} 
else
{
  console.log("Not Kosher food");
}

let foodType = ["Italian", "Mexican", "Israeli"],
    index = input.keyInSelect(foodType, "What kind of food do you want ? ");
console.log(foodType[index] + " food is preffered");

switch (index)
{
    // Italian food
    case 0:
        if (Lemehadrin)
            console.log("Aroma restaurant is recommended for you. Enjoy !!!");
        else if (Kosher)
            console.log("Landver restaurant is recommended for you. Enjoy !!!");
        else
            console.log("Spaggetim restaurant is recommended for you. Enjoy !!!");
        break;
    // Mexican food
    case 1:
        if (Lemehadrin)
            console.log("DelPapa restaurant is recommended for you. Enjoy !!!");
        else if (Kosher)
            console.log("Mexicana restaurant is recommended for you. Enjoy !!!");
        else
            console.log("Papagaio restaurant is recommended for you. Enjoy !!!");
        break;
    // Israeli food
    case 2:
        if (Lemehadrin)
            console.log("Nono restaurant is recommended for you. Enjoy !!!");
        else if (Kosher)
            console.log("Arcafe restaurant is recommended for you. Enjoy !!!");
        else
            console.log("Bliker restaurant is recommended for you. Enjoy !!!");
        break;
    // CANCEL
    default:
        console.log("No recommendation for restaurant");
        throw "stop execution !";                                                                                                                                                            
}