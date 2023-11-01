"use strict";
// All Programs are commented  accordingly and comments of Name Roll NUmber of each Program is mentioned
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*
Excercise # 16.
More Guests: You just found a bigger dinner table,
so now more space is available. Think of three more guests
to invite to dinner.
•Step1: Start with your program from Exercise 15.
Add a print statement to the end of your
program informing people that you found a bigger dinner table.
•Step:2 Add one new guest to the beginning of your array.
•Step:3 Add one new guest to the middle of your array.
Step:4• Use append() to add one new guest
to the end of your list.
•Step:5 Print a new set of invitation messages, one for each person in
your list
*/
Object.defineProperty(exports, "__esModule", { value: true });
// List of guests you'd like to invite to dinner Ex.15
//Guest_list= ["Allama Iqbal", "Quaid-e-Azam", "Rumi", "Imran Khan", "Father", "Loved_ones"];
const Guest_list_invite_1 = require("./Guest_list_invite");
// Message of Greetings to Join Dinner in Message Variable
let message = `,\nYou are cordially invited to a special 
dinner event.`;
const Guest_list = (0, Guest_list_invite_1.getguestlist)();
console.log("----------------------------------------------------------------------------");
//let remove_value_index=3;   // it is index at which value index need to remove 
//let remove_elements=1;  // how many elements need to remove
//let drop_guest=Guest_list.splice(remove_value_index,remove_elements)  //1 Remove remove_element and remove_element_index=3
let Freind_list = Guest_list; // created another Friend List to Update new entries
console.log("These Friends List are Coming to join Dinner");
//for(let frined of Freind_list )
//{
//  console.log(`${frined}`);
//}
console.log("----------------------------------------------------\n\n");
// Now Add another Friend for invitation
let add_at_index = 2; // index of array at which new value will be added
let new_friend = "Jahanzeb Tayyab"; // new value friend list name
Freind_list.splice(add_at_index, 0, new_friend); // splice function for add,remove,new value 
//for(let i=0;i<Freind_list.length; i++){// Loop for array friend-list and message them each entries updated
//  console.log(`${Freind_list[i]} ${message}`);
// console.log("-------------------------------------------------------------------------------------------")
//} 
//console.log(`Sorry This [${drop_guest}] [${drop_guest.length}], Guest is not comming for Dinner`);  // display message of removed from array
//console.log("++++++++++++++++++++++++++++++++++++++++++++++++++");
// Start with your program from Exercise 15. Add a print statement to the end of your 
//program informing people that you found a bigger dinner table.
console.log(`My ${Freind_list.length} Friend List for Dinner: `, Freind_list);
//console.log(`New [${newlist.length}] Friends Joining : `,newlist);
//• Step:2 Add one new guest to the beginning of your array.
let newlist = ["Nusrat Fateh", "Ali", " Saleem"];
let first_element = newlist.shift();
//console.log(first_element);
Freind_list.unshift(first_element);
console.log("Element Added at  Beginning of Array = ", Freind_list);
/**
 *Step:3• Add one new guest to the middle of your array.
 */
let middle_index = Math.round((Freind_list.length) / 2);
Freind_list.splice(middle_index, 0, newlist.pop());
//console.log("Element Added at Mid =  ",middle_index,Freind_list);
//console.log("Remaining New List :",newlist);
/*Step:4 Use Push() instead of append()  to add one new guest
to the end of your list.*/
Freind_list.push(newlist.pop());
//export const exp_list:string[]=Freind_list;
//console.log("Element Added at ",first_element?.length,Freind_list);
//console.log("Remaining New List :",newlist);
let big_dinner_message;
big_dinner_message = "\n==>>Dear All Guest Members Welcome for a bigger dinner table";
/**
 * Step:5 Print a new set of invitation messages, one for each person in
your list
 */
console.log("\n\n------------------------------------------------");
Freind_list.forEach((fried) => {
    console.log(`\n==>>Dear (${fried}) Welcome for a bigger dinner table"
`);
});
//export const {Freind_list};
