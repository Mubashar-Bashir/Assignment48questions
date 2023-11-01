"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*// Excercise=18                                                  //
////////////////////////////////////////////////////////////////////*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 18. Seeing the World: Think of at least five places in the world you’d
 * like to visit. Like [SwitzerLand, FinLand, Turkey, Dubai, India,America]
• Store the locations in a array. Make sure the array is not in
alphabetical order.[SwitzerLand, FinLand, Turkey, Dubai, India,America]
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the
original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order
has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
show that its order has changed.

 */
/**18. Seeing the World: Think of at least five places in the world you’d
 * like to visit. Like [SwitzerLand, FinLand, Turkey, Dubai, India,America]

• Step:1 Store the locations in a array. Make sure the array is not in
alphabetical order.[SwitzerLand, FinLand, Turkey, Dubai, India,America] */
let locations = ['SwitzerLand', 'FinLand', 'Turkey', 'Dubai', 'India', 'America'];
//• Print your array in its original order.
console.log(`Countries Locattion in Orignal Order:`);
locations.forEach((Countries) => {
    console.log(`${Countries}`);
});
//Print your array in alphabetical order without modifying the actual list.
let sortedlocationArray = [...locations];
sortedlocationArray.sort();
console.log(`---------------------------------------------------`);
console.log("Alphabetically Sorted Array : ", sortedlocationArray);
console.log(`-----------------------------------------------------`);
//• Show that your array is still in its original order by printing it.
console.log(`---------------------------------------------------`);
console.log(`Countries Locattion in Orignal Order:`);
locations.forEach((Countries) => {
    console.log(`${Countries}`);
});
//console.log(`------------------------------------------------------------`)
//• Print your array in reverse alphabetical order without 
//changing the order of the original list.
const reverseorderArray = [...locations];
reverseorderArray.sort();
reverseorderArray.reverse(); // reverse order array
console.log(`-----------------------------------------------------------`);
console.log('Reverse Order Array: ');
console.log(`-----------------------------------------------------------`);
console.log(reverseorderArray);
console.log(`-----------------------------------------------------------`);
//• Show that your array is still in its original order by printing it again.
console.log(`-----------------------------------------------------------`);
console.log(`Countries Array is Still in Orignal Order`);
console.log(`-----------------------------------------------------------`);
locations.forEach((Countries) => {
    console.log(`${Countries}`);
});
console.log(`-----------------------------------------------------------`);
//• Reverse the order of your list. 
//Print the array to show that its order has changed.
console.log(`-----------------------------------------------------------`);
console.log(`The Order of Array Has been Changed: `);
console.log(`-----------------------------------------------------------`);
//locations.sort();
locations.reverse();
locations.forEach((Countries) => {
    console.log(Countries);
});
console.log(`-----------------------------------------------------------`);
console.log(`The Order of Array Has Changed now in Orignal: `);
console.log(`-----------------------------------------------------------`);
//Reverse the order of your list again. 
//Print the list to show it’s back to its original order
console.log(`-----------------------------------------------------------`);
//console.log(`The Order of Array Has Now in Orignal: `);
console.log(`-----------------------------------------------------------`);
locations.reverse();
locations.forEach((Countries) => {
    console.log(Countries);
});
//Sort your array so it’s stored in alphabetical order. 
//Print the array to show that its order has been changed.
locations.sort();
console.log(`-----------------------------------------------------------`);
console.log(`The Order of Array Has Now in Alphabatical Order: `);
console.log(`-----------------------------------------------------------`);
locations.forEach((Countries) => {
    console.log(Countries);
});
//• Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.
locations.sort((a, b) => b.localeCompare(a));
console.log(`-----------------------------------------------------------`);
console.log("Array in Reverse Alphabetical Order:");
console.log(`-----------------------------------------------------------`);
locations.forEach((country) => {
    console.log(country);
});
