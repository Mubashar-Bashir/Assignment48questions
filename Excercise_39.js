"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/*                  39. City Names:

Call your function with at least three city-country pairs, and print the value that’s
returned*/
//Write a function called city_country() that takes in the name of a 
//city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
function city_country(city, country) {
    return `"${city}", "${country}" `;
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Gujranwala', 'Pakistan'));
console.log(city_country('Faisalabad', 'Pakistan'));
console.log(city_country('Mumbai', 'India'));
