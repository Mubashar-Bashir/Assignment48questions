"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/*                  37. Large Shirts:
Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript.
Make a large shirt and a medium
shirt with the default message,
and a shirt of any size with a different message.*/
function make_shirt(shirt_size = "Large", shirt_msg = "I Love Typescript") {
    // shirt_size=,
    shirt_msg = shirt_msg;
    if (shirt_size === "Large") {
        console.log(`Shirt are ${shirt_size} by default,with message:${shirt_msg}`);
    }
    else {
        console.log(`Shirt are ${shirt_size},with message:${shirt_msg}`);
    }
}
make_shirt("Medium", "Metaverse"); // Medicum size and message:metaverse
make_shirt(); // default parameter Large|Medium|Small, Message: I love
