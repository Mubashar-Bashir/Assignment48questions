"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*
24. More Conditional Tests: You don’t have to limit the number of tests you create to
10. If you want to try more comparisons, write more tests. Have at least one True
and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater
than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */
Object.defineProperty(exports, "__esModule", { value: true });
//import { NOTFOUND } from "dns";
//Tests for equality and inequality with strings
let strng1 = "PIAIC";
let strng2 = "pepsi";
console.log("A.1 string PIAIC==pepsi, I perdict false");
console.log(strng1 == strng2); // value same equals
console.log("A.2 string PIAIC===pepsi, I perdict false");
console.log(strng1 === strng2); // type = string but value 
////////////////////////////////
//• Tests using the lower case function
console.log('----------------------------------------------');
console.log(strng1.toLowerCase() == strng2.toLowerCase());
console.log("B.1 string.lower() piaic==pepsi, I perdict false");
console.log(strng1.toLowerCase() === strng2.toLowerCase());
console.log("B.1 string.lower() piaic==pepsi, I perdict false");
//• Numerical tests involving equality and inequality, 
let a = 1234;
let b = 4567;
let c = 8473;
let arraycompare = [1234, 4857, 4759, 5906, 3746, 8473];
console.log('-----------------------------------------');
console.log('--------------->>> PART C <<-------------------');
console.log('-----------------------------------------');
//greater than and less than,  
console.log('a=1234 > b = 4567 (False) && a<c :Predicted False:', a > b && a < c);
//greater than or equal to, and less than or equal to
console.log('a=1234 > b = 4567 (False)  a==c 8473 :Predicted False:', a > b || a == c);
//than or equal to, and less than or equal to
console.log('a=1234 >= b = 4567 (False) && a<=c 8473 (True) :Predicted False:', a >= b && a <= c);
//• Tests using "and" and "or" operators
console.log('a=1234 & b = 4567 (False) && a|c 8473 (True) :Predicted True:', a && b >= a || c);
//• Test whether an item is in a array
arraycompare.forEach(element => {
    if (element === a) {
        console.log("True a in array", a, "=", element);
    }
    else if (b === element) {
        console.log("True b in array", b, "=", element);
    }
    else if (c === element) {
        console.log("True c in array", c, "=", element);
    }
});
//• Test whether an item is not in a array
// else {
//     console.log("a not in arraycompare");
//     console.log("b not in arraycompare");
//     console.log("C not in arraycompare");
// }
