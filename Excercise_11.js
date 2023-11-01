"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*
Excercise # 11. Names: Store the names of a few of your friends in a array called names. Print
each person’s name by accessing each element in the list, one at a time.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let Names = ['ALI', 'AHMAD', 'SALEEM', 'MUDASAR', "SUHAIL ANJUM"]; // Array Declaration Friends Name
exports.default = Names;
console.log(Names); // Display All elements of  Array Name
console.log("--------------------------------------------------------");
// for loop upto length of array elements and print index of element wise items 
for (let i = 0; i < Names.length; i++) {
    console.log(Names[i]);
}
