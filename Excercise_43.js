"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magician_list_1 = require("./magician_list");
//import { local_magician_name } from "./Excercise_42";
var sep_Array = [];
function make_great() {
    for (var i = 0; i < magician_list_1.magician_name.length; i++) {
        sep_Array[i] = "".concat(magician_list_1.greet, " ").concat(magician_list_1.magician_name[i]);
        //console.log(sep_Array[i]);
    }
    return sep_Array;
}
function show_magicians(sep_Array) {
    var count = magician_list_1.magician_name.length;
    console.log("Greet Array         |            ", "  Orignal Array");
    for (var i = 0; i < count; i++) {
        console.log(sep_Array[i], "      |   ", magician_list_1.magician_name[i]);
        //console.log();
    }
}
sep_Array = make_great();
show_magicians(sep_Array);
