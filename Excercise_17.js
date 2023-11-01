"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*

/**
 * Q 17. Shrinking Guest List: You just found out that your
 *new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.



• Remove the last two names from your list, so you have an empty list.
Print your list to
make sure you actually have an empty list at the end of your program.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//let Guest_shrink_list:Freind_list;
let Guest_shrink_list = ['Nusrat Fateh',
    'Allama Iqbal',
    'Quaid-e-Azam',
    'Jahanzeb Tayyab',
    ' Saleem',
    'Rumi',
    'Father',
    'Loved_ones',
    'Ali'];
console.log(`-----------------------------------------------`);
console.log(`\n\nI can Invite only two people for Dinner`);
console.log(`-----------------------------------------------`);
//console.log(`${Guest_shrink_list}`);
/**Step:2 Remove guests from your list one at a time until
 * only two names remain in your list.
Each time you pop a name from your list,
print a message to that person letting them
know you’re sorry you can’t invite them to dinner. */
let drop_guests = [];
const count = Guest_shrink_list.length - 2;
//console.log(` Guest_shrink_List Length = 
//${Guest_shrink_list.length} Count= : ${count}`);
for (let i = 0; i <= count - 1; i++) {
    let removed_element = Guest_shrink_list.pop();
    console.log(`[${i}] ${removed_element},==>> Sorry You aren't Invited`);
    //  drop_guests=drop_guests.push(removed_element);
}
/**
 * Step:3 Print a message to each of the two people still on
 * your list, letting them know they’re still invited.
 */
console.log("----------------------------------------------\n");
Guest_shrink_list.forEach((friend, index) => {
    console.log(`[${index}] ${friend}, You are Still Invited for Dinner`);
});
//for( let friendss of Guest_shrink_list){
//  let index = Guest_shrink_list.indexOf(friendss);
//console.log(`[${index}] ${friendss}, You are Still Invited for Dinner`)
//}
//console.log(`${Guest_shrink_list.length}`)
/** Step:4
 * Remove the last two names from your list, so you have an empty list.
 * Print your list to make sure you actually have an empty list
 * at the end of your program
 */
const count2 = Guest_shrink_list.length; //2 length of count
for (let i = 0; i <= count2 - 1; i++) {
    drop_guests.push(Guest_shrink_list.pop());
}
console.log(`----------------------------------------------`);
console.log("Guest Shrink Empty List : ", Guest_shrink_list, Guest_shrink_list.length);
console.log(`----------------------------------------------`);
