"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.App_username = void 0;
/*
30. Hello Admin: Make a array of five or more usernames,
including the name 'admin'. Imagine you are writing code
that will print a greeting to each user after
they log in to a website. Loop through the array,
and print a greeting to each user:
• If the username is 'admin', print a special greeting,
such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as
Hello Eric, thank you for logging in again*/
exports.App_username = [
    'ALI', 'USMAN',
    'WASI', 'RAZA', 'DUA', 'ASHA',
    "admin"
];
//const greeting_msg="Hello App_user, thank you for logging in again";
exports.login = ((user) => {
    if (exports.App_username.includes(user)) {
        if (user === "admin") {
            console.log(`Hello ${user}, would you like to see a status report?`);
            console.log(`Status_Report(${user}) Function call`);
        }
        else
            console.log(`Hello ${user}, Thank you for Logging in Again`);
    }
    else {
        console.log(user, "You are Not Authorized User, please sign-up to create");
    }
});
(0, exports.login)('ali'); // check user ali Login Message
(0, exports.login)('admin'); // check user admin Login Message
(0, exports.login)('ASHA'); // check user ASHA Login Message
