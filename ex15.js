let arrayOne = ["Hello"];
let arrayTwo = ["AppleSeeds", "Bootcamp"]
let JoinedArray = [""];

function joinArrays(arr1, arr2)
{
    arr1 = arr1.concat(arr2);
    return arr1;
}

JoinedArray = joinArrays(arrayOne,arrayTwo);

console.log("First array  = ",arrayOne);
console.log("Second array = ",arrayTwo);
console.log("Joined array = ",JoinedArray);