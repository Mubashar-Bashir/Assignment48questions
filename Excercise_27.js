"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4
into an if-else chain.
• Write three versions of this program, making sure each message is printed for the
appropriate color alien.*/
let scoreof_aliens = 0;
let alien_test = "red";
//• If the alien is green, print a message that the player earned 5 points.
if (alien_test === "green") {
    scoreof_aliens = 5;
    console.log(alien_test, "Alien shot and got score", scoreof_aliens);
}
//• If the alien is yellow, print a message that the player earned 10 points.
else if (alien_test === "yellow") {
    scoreof_aliens = 10;
    console.log(alien_test, "Alien shot and got score", scoreof_aliens);
}
//• If the alien is red, print a message that the player earned 15 points.
else if (alien_test === "red") {
    scoreof_aliens = 15;
    console.log(alien_test, "Alien shot and got score", scoreof_aliens);
}
