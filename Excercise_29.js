"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
//import { captureRejectionSymbol } from "events";
/*29. Favorite Fruit:
Make an array of your favorite fruits, and then write a series of
independent if statements that check for certain fruits in your array.
*/
let check_fruite = "PineApple";
let favorite_fruites = [
    "Apple",
    "Banana",
    "PineApple",
    "Grapes",
    "Strawberry",
];
if (favorite_fruites.includes(check_fruite)) {
    console.log(check_fruite, "Found in the Array");
}
else {
    console.log(check_fruite, "Not Found in the Array");
}
// favorite_fruites.forEach(element => {
//     if(element===check_fruite)
//     {
//         console.log(element,"Found in Array");
//     }
//     else{
//         console.log(check_fruite,"Not Found in Array");
//     }
//     });
//• Make a array of your three favorite fruits and call it 
//favorite_fruits.
const favorite_3fruite = ['Banana', 'Apple', 'Grapes'];
/*
• Write five if statements.
Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/
// 1st IF Statement independent 
if (favorite_3fruite.includes('Banana')) {
    console.log(`You really like "Banana"!`);
}
// 2nd If Statement
if (favorite_3fruite.includes('Apple')) {
    console.log(`You really like "Apple!`);
}
//3rd if statement
if (favorite_3fruite.includes('PineApple')) {
    console.log(`You really like "PineApple"!`);
}
// 4th if Statement
if (favorite_3fruite.includes('Grapes')) {
    console.log(`You really like "Grapes"!`);
}
//5th if statement
if (favorite_3fruite.includes('Strawberry')) {
    console.log(`You really like "Strawberry"!`);
}
