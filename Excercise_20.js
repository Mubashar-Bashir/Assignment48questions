"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/*
Excercise # 20. Think of something you could store in a array. For example, you could make a list
of mountains, rivers, countries, cities, languages,
or anything else you’d like. Write a program that creates a list
containing these items*/
Object.defineProperty(exports, "__esModule", { value: true });
let item_array = ['mountains', 'rivers',
    'countries', 'cities', 'languages', "Moon", 'Stars'];
console.log(`List of Items stored in Array`);
console.log(`-------------------------------------------------`);
console.log(item_array);
console.log(`-------------------------------------------------`);
item_array.forEach((items) => {
    console.log(" Elements stored in Array:", items);
});
console.log(`-------------------------------------------------`);
