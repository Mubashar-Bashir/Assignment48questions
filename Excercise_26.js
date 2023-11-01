"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/*26. Alien Colors #2:
: Choose a color for an alien as you did in Exercise 25, and write an
if-else chain.
• Write one version of this program that runs the if block
and another that runs the else block
*/
//import { shot } from "./Excercise_25";
let player = "Red_Alien";
let fireto_alien_color = "red";
let score = 0;
if (fireto_alien_color === "green") {
    //         • If the alien’s color is green, print a statement that the player 
    // just earned 5 points for shooting the alien.
    score = 5;
    console.log(`${player} just earned ${score} points for shooting the ${fireto_alien_color} alien.`);
}
else {
    //         • If the alien’s color isn’t green, print a statement 
    // that the player just earned 10 points.
    score = 10;
    console.log(`${player} just earned ${score} points for shooting the ${fireto_alien_color} alien.`);
}
