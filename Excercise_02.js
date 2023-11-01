"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/*  ----
Excercise# 3. Name Cases: Store a person’s name in a variable, and then print that person’s
name in lowercase, uppercase, and titlecase
*/
let prsons_name = "ALLAMA MUHAMMAD"; // previous Files person_name=allama muhammad iqbal 
console.log("Lower case Letters of Person Name ALLAMA MUHAMMAD \n");
console.log('Lower Case : ', prsons_name.toLowerCase()); // to lower case
console.log('Upper Case : ', prsons_name.toUpperCase()); // to Upper case
//console.log('Lower Case : ',person_name.totitlecase());  // to Titlecase
function toTitleCase(input) {
    return input.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
//const originalString = "this is a test string";
//const titleCaseString = toTitleCase(originalString);
const titleCaseString = toTitleCase(prsons_name);
console.log(titleCaseString); // Outputs: "This Is A Test String"
