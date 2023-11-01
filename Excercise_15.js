"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*
Excercise # 15.
Changing Guest List: You just heard that one of your guests can’t make
the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
(Step 1 : Remove 1 Friend from Guest_list just heard not joining)

•Step:1 Start with your program from Exercise 14.
Add a print statement at the end of your
program stating the name of the guest who can’t make it.

•Step:2 Modify your list, replacing the name of the guest who
Can’t make it with the name of the new person you are inviting.

•Step:3 Print a second set of invitation messages, one for each person
who is still in your list.
*/
// All Programs are commented  accordingly and comments of each 
//Program is mentioned List of guests you'd like to invite to dinner
//let guest_list: Array<string> = ["Allama Iqbal", "Quaid-e-Azam", "Rumi", "Imran Khan", "Father", "Loved_ones"];
const Guest_list_invite_js_1 = require("./Guest_list_invite.js");
const Guest_list = (0, Guest_list_invite_js_1.getguestlist)();
// Message of Greetings to Join Dinner in Message Variable
console.log("-------------------------Excercise_15--------------");
//console.log(`Total${Guest_list.length} Guest List imported`,Guest_list);
/**
 * Step:1 Start with your program from Exercise 14.
step 1 done with import of Guest_list  >>>Done<<<
* Add a print statement at the end of your
program stating the name of the guest who can’t make it.  >>DONE<<

 * Changing Guest List: You just heard that one of your
 * guests can’t make the dinner,
 */
/* •Step:2 Modify your list, replacing the name of the guest who
Can’t make it with the name of the new person you are inviting.
 */
// let change the Guest_list for specific Guest
let remove_value_index = 3; // it is index at which value index need to remove 
let remove_elements = 1; // how many elements need to remove
let drop_guest = Guest_list.splice(remove_value_index, remove_elements); //1 Remove remove_element and remove_element_index=3
//console.log(`\n I just heard that (${drop_guest}) From 
//guests can’t make the dinner `)
/**
 * so you need to send out a new set of invitations.
 * You’ll have to think of someone else to invite.
 
*/
let new_freind_list = Guest_list;
// created another Friend List to Update new entries
console.log(`These (${new_freind_list.length}) 
Friends List are Coming to join Dinner`);
//console.log(`Previous Guestlist: ${Guest_list}`)
//console.log(`New Guest List `,(new_freind_list));
//for(let friend of Freind_list){
//  console.log(friend);    
//}
console.log("-----------------------------------");
/**/
// Now Add another Friend for invitation
let add_at_index = 2;
// index of array at which new value will be added
let delete_items = 0;
let new_friend = "Jahanzeb Tayyab"; // new value friend list name
new_freind_list.splice(add_at_index, delete_items, new_friend); // splice function for add,remove,new value 
/*
 * •Step:3 Print a second set of invitation messages,
 * one for each person who is still in your list.
*/
let messagetoguest = `,\nYou are cordially invited to a special dinner event. 
Your wisdom and presence would be an honor. `;
let i = 0;
for (let fried of new_freind_list) { // Loop for array friend-list and message them each entries updated
    console.log(`Guest # [${++i}] ${fried} ${messagetoguest}`);
    console.log("-----------------------------------------------------------------");
}
console.log(`Sorry This [${drop_guest} = ${drop_guest.length}] , Guest is not comming for Dinner`); // display message of removed from array
//console.log(`Welcome Our [${Freind_list.length}] List, Guests are comming for Dinner`);  // display message of removed from array
