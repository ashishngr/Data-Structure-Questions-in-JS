// TODO: Reverse the string in one line 
// Method:1

var string1 = "hello";
var splitString1 = string1.split("");
splitString1.reverse();
var finalString1 = splitString1.join("");
console.log(finalString1);

// Method2: 

var string2 = "Delhi";
var finalString2 = string2.split("").reverse().join("");
console.log(finalString2);