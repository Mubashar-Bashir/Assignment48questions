"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/**
 * 31. No Users: Add an if test to Exercise 28 to make sure
 * the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure
the correct message is printed
 */
const Excercise_30_1 = require("./Excercise_30");
let list_of_user = Excercise_30_1.App_username;
let count = list_of_user.length;
console.log("Total Users in the List : ", count);
// to empty the list to check if statement
for (let i = 0; i < count; i++) {
    list_of_user.pop();
}
count = list_of_user.length;
console.log("Total Users in the List after deleted : ", count);
// check if array is empty 
//• If the list is empty, print the message We need to find some users!
if (!list_of_user.length) {
    console.log('we need to find some users!');
}
else {
    console.log("Run next Line of Code");
}
