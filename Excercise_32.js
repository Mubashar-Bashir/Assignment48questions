"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/**
             32. Checking Usernames:
 * Do the following to create a program that simulates how
websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in the
current_users list.

• Loop through the new_users list to see if each new username
has already been used. If it has, print a message that the person
will need to enter a new username. If a username
has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive.
If 'John' has been used, 'JOHN' should not be accepted.
 
*/
Object.defineProperty(exports, "__esModule", { value: true });
//• Make a list of five or more usernames called current_users.
let current_users = [
    'ali', 'ahmad', 'asif', 'wasi', 'dua', 'adil'
];
//• Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the 
//current_users list.
let new_users = [
    'ali', 'ahmad', 'asif', 'wasti', 'huda', 'ahil', 'AHMAD'
];
/*• Loop through the new_users list to see if each new username
has already been used. If it has, print a message that the person
will need to enter a new username. If a username has not been used,
print a message saying that the username is available.*/
//• Make sure your comparison is case insensitive. 
//If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach(element => {
    if (current_users.includes(element)) {
        console.log(`${element} will need to enter a new user name`);
    }
    else {
        console.log(`${element} Username is Available`);
    }
});
