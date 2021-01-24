const input = require('readline-sync');

let prefix = `Hello to
Our quiz
Enjoy it`

let question1 = ["Never", "Rarely", "Frequently", "Always"],
    index1 = input.keyInSelect(question1, "Did you help an old person to cross the road ? ");
console.log(question1[index1] + " was selected");

//if cancel throw error

let question2 = ["Never", "Rarely", "Frequently", "Always"],
    index2 = input.keyInSelect(question2, "Did you help an old person to cross the road ? ");
console.log(question2[index2] + " was selected");

let question3 = ["Never", "Rarely", "Frequently", "Always"],
    index3 = input.keyInSelect(question3, "Did you help an old person to cross the road ? ");
console.log(question3[index3] + " was selected");

let question4 = ["Never", "Rarely", "Frequently", "Always"],
    index4 = input.keyInSelect(question4, "Did you help an old person to cross the road ? ");
console.log(question4[index4] + " was selected");

let question5 = ["Never", "Rarely", "Frequently", "Always"],
    index5 = input.keyInSelect(question5, "Did you help an old person to cross the road ? ");
console.log(question5[index5] + " was selected");

score = index1 + index2 + index3 + index4 + index5;

console.log("score = " + score);

switch (score)
{
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Obviously you are not an angel !!!");
        break;

    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("You try to be good person, keep going !!!");
        break;

    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        console.log("You are an angel !!!");
        break;

    /*case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        console.log(" !!!");
        break;
    */
    default:
        console.log("");
        throw "stop execution !";                                                                                                                                                            
}