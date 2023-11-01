"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*
Excercise # 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would
you invite? Make a list that includes at least three people you’d like to invite to
dinner. Then use your list to print a message to each person, inviting them to
dinner.
*/
// All Programs are commented  accordingly and comments of Name Roll NUmber of each Program is mentioned
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise #14. Guest List
// List of guests you'd like to invite to dinner
//let Guest_list: string[] = ["Allama Iqbal", "Quaid-e-Azam", "Rumi", "Imran Khan", "Father", "Loved_ones"];
const Guest_list_invite_1 = require("./Guest_list_invite");
const Guest_list = (0, Guest_list_invite_1.getguestlist)();
let New3_list = Guest_list.slice(0, 3); // slice start 0 , end 3
console.log("3 Selected List of Guest :", New3_list);
console.log("From Full Guest List of ==>", Guest_list);
New3_list.forEach((guest) => {
    console.log(`Dear ${guest},\nYou are cordially invited to a special dinner event. Your wisdom and presence would be an honor. We would love to hear your insights and stories. The dinner will be held on 06-08-2023 at 09:00 PM at London UK.\n\nBest regards,\n[Mubashar Bashir]`);
    console.log("----------------------------------------------------------------------------");
});
// Loop through the guest list and print invitation messages
/*for (let i = 0; i < Guest_list.length; i++) {
    if (Guest_list[i] === "Allama Iqbal") {
        console.log(`Dear ${Guest_list[i]},\nYou are cordially invited to a special dinner event. Your wisdom and presence would be an honor. We would love to hear your insights and stories. The dinner will be held on 06-08-2023 at 09:00 PM at London UK.\n\nBest regards,\n[Mubashar Bashir]`);
    console.log("----------------------------------------------------------------------------");
    }
    else if (Guest_list[i] === "Quaid-e-Azam") {
        console.log(`Dear ${Guest_list[i]},\nYou are cordially invited to a special dinner event. Your wisdom and presence would be an honor. We would love to hear your insights and stories. The dinner will be held on 06-08-2023 at 09:00 PM at London UK.\n\nBest regards,\n[Mubashar Bashir]`);
        console.log("----------------------------------------------------------------------------");
    }
    else if (Guest_list[i] === "Rumi") {
        console.log(`Dear ${Guest_list[i]},\nYou are cordially invited to a special dinner event. Your wisdom and presence would be an honor. We would love to hear your insights and stories. The dinner will be held on 06-08-2023 at 09:00 PM at London UK.\n\nBest regards,\n[Mubashar Bashir]`);
        console.log("----------------------------------------------------------------------------");
    }

    else if (Guest_list[i] === "Imran Khan") {
        console.log(`Dear ${Guest_list[i]},\nYou are cordially invited to a special dinner event. Your wisdom and presence would be an honor. We would love to hear your insights and stories. The dinner will be held on 06-08-2023 at 09:00 PM at London UK.\n\nBest regards,\n[Mubashar Bashir]`);
        console.log("----------------------------------------------------------------------------");
    }
    else if (Guest_list[i] === "Father") {
        console.log(`Dear ${Guest_list[i]},\nYou are cordially invited to a special dinner event. Your wisdom and presence would be an honor. We would love to hear your insights and stories. The dinner will be held on 06-08-2023 at 09:00 PM at London UK.\n\nBest regards,\n[Mubashar Bashir]`);
        console.log("----------------------------------------------------------------------------");
    }
    else
    {
         {
            console.log(`Dear ${Guest_list[i]},\nYou are cordially invited to a special dinner event. Your wisdom and presence would be an honor. We would love to hear your insights and stories. The dinner will be held on 06-08-2023 at 09:00 PM at London UK.\n\nBest regards,\n[Mubashar Bashir]`);
            console.log("----------------------------------------------------------------------------");
        }
    }
}
*/
