"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/*
6. Stripping Names: Store a person’s name, and include some whitespace characters
at the beginning and end of the name. Make sure you use each character
combination, "\t" and "\n", at least once. Print the name once, so the whitespace
around the name is displayed. Then print the name after striping the white
spaces
*/
console.log("Stripping Name Solution Excercise_6");
let prsn_name = "\tMubashar \nBshir";
console.log('persone_name : "\t" Mubashar "\n" Bashir  Whitespcess \n: ', prsn_name); // simple person_name stored with white spaces 
console.log('\nTrim white spaces arround variable person Name:');
console.log(prsn_name.trim()); // Trim only remove strating and ending white space not in between 
//console.log('person_name : "\\t" Mubashar "\\n" Bashir  called as \\n: ', prsn_name);  // Displaying the name with whitespace characters
console.log('strip white spaces Using replace method:');
console.log(prsn_name.replace(/\t|\n/g, '')); // Removing \t and \n from the string we can use replace
