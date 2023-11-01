"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/**                     * 34. Pizzas:

*/
Object.defineProperty(exports, "__esModule", { value: true });
//Think of at least three kinds of your favorite pizza. 
//Store these pizza names in a array, and then use a 
//for loop to print the name of each pizza.
let kinds_of_pizas = [
    "Chicken Tikka", "Chikken Fajita", " vegi-special"
];
kinds_of_pizas.forEach(element => {
    console.log(element);
});
//• Modify your for loop to print a sentence using the name of the pizza 
//instead of printing just the name of the pizza. 
//For each pizza you should have one line of output 
//containing a simple statement like I like pepperoni pizza.
kinds_of_pizas.forEach(element => {
    console.log("I Like ", element, "Pizza");
});
//• Add a line at the end of your program, outside the for loop, 
//that states how much you like pizza. The output should consist of 
//three or more lines about the kinds of pizza you 
//like and then an additional sentence, such as I really love pizza!
// Add a closing message about your love for pizza
console.log("\nI really love pizza!");
console.log("I enjoy all kinds of pizza, from classic Margherita to savory Pepperoni.");
console.log("Pizza is simply the best comfort food ever!");
