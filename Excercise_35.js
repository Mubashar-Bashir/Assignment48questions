"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/**                     35. Animals:
 
 • Modify your program to print a statement
about each animal, such as A dog would make a great pet.

• Add a line at the end
of your program stating what these animals have in common. You could print a
sentence such as Any of these animals would make a great pet*/
Object.defineProperty(exports, "__esModule", { value: true });
//Think of at least three different animals that have a common 
//characteristic. Store the names of these animals in a list, 
//and then use a for loop to print out the name of each animal. 
let animal_list = ['DOG', "Cat", "Rabbit"];
animal_list.forEach(animals => {
    console.log(animals);
});
//• Modify your program to print a statement 
//about each animal, such as A dog would make a great pet. 
animal_list.forEach(animals => {
    let animal = animals;
    switch (animal) {
        case "DOG":
            console.log(`A ${animal} would make a great pet.`);
            break;
        case "Cat":
            console.log(`A ${animal} is an independent and playful companion.`);
            break;
        case "Rabbit":
            console.log(`A ${animal} is a cute and gentle creature.`);
            break;
        default:
            console.log(`I don't know much about a ${animal}.`);
    }
    //    console.log(animals);
});
// Add a line at the end of the program stating what these animals have in common
console.log("Any of these animals would make a great pet.");
