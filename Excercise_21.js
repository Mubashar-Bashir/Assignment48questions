"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
//Excercise # 21
//21. They think of something you could store in a TypeScript Object. 
//Write a program 
//that creates Objects containing these items.
//let item_array2:Array<string>=['mountains', 'rivers', 
//'countries', 'cities', 'languages',"Moon",'Stars'];
let country = {
    Name: 'string',
    Language: "string",
    Mountain: "string",
    City: "string",
    River: "string",
    Capital: "string",
    Desert: "string"
    //   [index:'string']:'any'
    //Mountain:"string"
};
let typeObject = { country: country, sky: 'string', stars: 'string' };
typeObject = {
    country: {
        Name: "Pakistan",
        Language: "Urdu",
        Mountain: "K2",
        City: "Korakaram",
        River: "Indus",
        Capital: "Islamabad",
        Desert: "Thar"
    },
    sky: "Black-Moon",
    stars: "Shining"
};
typeObject.country['Desert'] = "Thar";
typeObject.country['Capital'] = "Islamabad";
console.log(`--------------------------------`);
//console.log(typeObject.country);
console.log(`List of Countries information`);
console.log(`--------------------------------`);
// for (let key in typeObject) {
//     if (typeObject.hasOwnProperty(key)) {
//         console.log(`${key} : ${typeObject[key]}`);
//     }
// };
const Pakistan = {
    country: {
        Name: "Pakistan",
        Language: "Urdu",
        Mountain: "K2",
        City: "Lahore",
        River: "Indus",
        Capital: "Islamabad",
        Desert: "Thar"
    }
};
console.log("Data of Pakistan:", Pakistan.country.Name);
console.log(Pakistan);
const India = {
    country: {
        Name: "India",
        Language: "Hindi",
        Mountain: "Unknown",
        City: "Mumbai",
        River: "Ganga-Jamna",
        Capital: "Mumbai",
        Desert: "Desert-india"
    }
};
console.log("Name Of Country :", India.country.Name);
console.log("Languaue of This :", India.country.Language);
console.log(India);
