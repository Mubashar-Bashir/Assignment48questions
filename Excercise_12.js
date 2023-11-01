"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*
Excercise # 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing
each person’s name, print a message to them. The text of each message should
be the same, but each message should be personalized with the person’s name.

*/
// All Programs are commented  accordingly and comments of Name Roll NUmber of each Program is mentioned
const Excercise_11_1 = __importDefault(require("./Excercise_11")); // import from export default pre excercise_11
//let names:string[]=["Saleem","Mudassar","Suhail Anjum","Wicky","Murshad"];
let Greetings = 'Welcome To Web 3.0 ,Metaverse and AI Platform';
for (const name of Excercise_11_1.default) {
    console.log(name, Greetings);
}
