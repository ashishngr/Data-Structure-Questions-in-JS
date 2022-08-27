// TODO: Remove element from array 

// Method:1 Using Splica()

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var removeItem = 6;
var IndexOfRemoveItem = array.indexOf(removeItem);
var removeItem = array.splice(IndexOfRemoveItem, 1);
console.log("original array", array);
console.log("removable item", removeItem);
console.log("final array", array);

// Method:2 using Slice()

let initialArray = [1,2, 3, 4, 5, 6, 7, 8, 9];
var item = 2;
var indexOfItem = initialArray.indexOf(item);
var finalArray = initialArray.slice(indexOfItem, initialArray.length);
// console.log(finalArray);

// Method:3 using filter()
let array3 = [1,2,3,4,5,6,7,8,9];
let item2 = 7;
let finalArray2 = array3.filter(item => item !== item2)
console.log(finalArray2);

// Remove Multiple values using filter()

let array4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let removeArray = [1,9, 3, 11, 5];
let finalArray3 = array4.filter(item =>  !removeArray.includes(item));
console.log(finalArray3)