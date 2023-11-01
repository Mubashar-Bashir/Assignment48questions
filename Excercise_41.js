"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/*                  41. Magicians:
Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.*/
var magician_list_1 = require("./magician_list");
//let result=show_magicians(magician_name)
function show_magicians(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
show_magicians(magician_list_1.magician_name);
//export {show_magicians};
