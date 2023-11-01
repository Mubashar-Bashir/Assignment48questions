"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*
Excercise # 13. Your Own Array: Think of your favorite mode of transportation, such as a
motorcycle or a car, and make a list that stores several examples. Use your list to
print a series of statements about these items, such as “I would like to own a
Honda motorcycle.”
*/
// All Programs are commented  accordingly and comments of Name Roll NUmber of each Program is mentioned
let own_array = ["Car", "MotorCycle", "Cycle", "Truck", "Van", "Bus", "AeroPlane", "Self-Driving-Car",];
//TransportFunction();
function TransportFunction() {
    console.log("I would Like To Own a Honda ", own_array[1]);
    console.log("I would Like To Own a Toyota ", own_array[0]);
    console.log("I would Like To Travel at ", own_array[6]);
    console.log("I would Like To Own a Google", own_array[7]);
    console.log("I would Like To Ride on ", own_array[2]);
    console.log("I would Like To Drive and Try a  ", own_array[3], 'or', own_array[4], "OR", own_array[5]);
    console.log("----------------------------------------------------");
}
for (let i = 0; i < own_array.length; i++) {
    console.log('I Would Like to Own a ', own_array[i]);
}
let tranport_mode = [];
tranport_mode.push(['Car', "Toyota Corolla"]);
tranport_mode.push(['MotorCycle', "Rider"]);
tranport_mode.push(['Truck', "Isuzu"]);
tranport_mode.push(['Bus', "BMW"]);
console.log("\n-------------------------\n", tranport_mode);
tranport_mode.forEach(([tran, br]) => { console.log(`I would like to own a ${br},${tran}`); });
//`I would like to own a ,${transport},${bran}`)
