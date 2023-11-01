"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
exports.local_magician_name = void 0;
/*42. Great Magicians:
Start with a copy of your program from Exercise 39. Write a
function called make_great()
that modifies the array of magicians by adding the
phrase the Great to each magician’s name.
Call show_magicians() to see that the
list has actually been modified.*/
var magician_list_1 = require("./magician_list");
//import { show_magicians } from "./Excercise_41";
var local_magician_name = magician_list_1.magician_name;
exports.local_magician_name = local_magician_name;
//let greet:string="The Greet";
//export {greet};
var counter = local_magician_name.length;
function make_great(array, greet) {
    for (var i = 0; i < counter; i++) {
        local_magician_name[i] = "".concat(greet, " ").concat(array[i]);
    }
}
function show_magicians() {
    for (var i = 0; i < counter; i++) {
        console.log(local_magician_name[i]);
    }
}
console.log(">>>> Magician List Has Actually Been Modified<<<<");
make_great(local_magician_name, magician_list_1.greet);
show_magicians();
