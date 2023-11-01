"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*
Excercise # 22.
Intentional Error: If you haven’t received an array index error in one
of your programs yet, try to make one happen. Change an index in one of
your programs to produce an index error. Make sure you correct the
error before closing the program*/
Object.defineProperty(exports, "__esModule", { value: true });
const myArray = [1, 2, 3, 4, 5];
let invalid_index = 10; // invalid index undefined 
console.log(myArray[invalid_index]);
let valid_index = 3;
console.log(myArray[3]); // valid index 3= value 4 in array
