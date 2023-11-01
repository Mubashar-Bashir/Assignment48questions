"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/**                     36. T-Shirt:
 Write a function called make_shirt() that accepts a size
 and the text of a message that should be printed on the shirt.
 The function should print a sentence
summarizing the size of the shirt and the message printed on it.
Call the function.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, text) {
    size: size;
    text: text;
    print_shirt(size, text);
}
;
function print_shirt(size, text) {
    console.log(`summarizing the ${size} of the shirt 
    and the Message: ${text} printed on it. `);
}
make_shirt("Medium", "I am Excited for AI");
