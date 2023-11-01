"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/*                  38. Cities:
Write a function called describe_city() that accepts the name of a city
and its country. The function should print a simple sentence,
such as Karachi is in Pakistan. Give the parameter for the
country a default value. Call your function for three different cities,
at least one of which is not in the default country.*/
function describe_city(City, country = "Pakistan") {
    country = country;
    console.log(City, "is in", country);
}
describe_city("Krachi");
describe_city("Lahore");
describe_city("Gujranwala");
describe_city("Mumbai", "India");
