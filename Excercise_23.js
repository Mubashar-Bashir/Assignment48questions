"use strict";
/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
/*
23. Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction
for the results of each test. Your code should look
something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each
line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True
and another 5 tests evaluate to False.
*/
let x5 = 5;
let y10 = 10;
let str1hello = "hello";
let str2world = "world";
let arr123 = [1, 2, 3];
let arr2_123 = [1, 2, 3];
let obj1_allice = { name: "Alice" };
let obj2_bob = { name: "Bob" };
// Test 1: Equality (True)
console.log("1.Is x5 equal to y10? I predict False.");
console.log(x5 === y10); // === type =number and value == equals
// Test 2: Inequality (True)
console.log("2.Is x5 not equal to y10? I predict True.");
console.log(x5 !== y10); // value is not equals
// Test 3: Greater than (False)
console.log("3.Is x5 greater than y10? I predict False.");
console.log(x5 > y10);
// Test 4: Less than (True)
console.log("4.Is x less than y? I predict True.");
console.log(x5 < y10);
// Test 5: String equality (False)
console.log("5.Are str1 and str2 equal? I predict False.");
console.log(str1hello === str2world); // value check hello != world
// Test 5.1: String equality (False)
console.log("5.1 .Are str1 hello and str2 World !=equal? I predict True.");
console.log(str1hello !== str2world); // value check hello != world
// Test 6: Array equality (True)
console.log("6.Are arr1[123] and arr2[123] equal? I predict True.");
console.log(arr123 === arr2_123); // this will check only reference not values
console.log(arr123, arr2_123); // as refrence is not equals
// Test 7: Object equality (False)
console.log("7.Are obj1 and obj2 equal? I predict False.");
console.log(obj1_allice === obj2_bob); // strong type and value
// Test 8: Array length (True)
console.log("8.Is the length of arr1 equal to 3? I predict True.");
console.log(arr123.length === 3); // 
// Test 9: String length (False)
console.log("9.Is the length of str1 equal to 5? I predict True.");
console.log(str1hello.length === 5); // hello length=5 true
// Test 10: Object property existence (True)
console.log("10.Does obj1 have a 'name' property? I predict True.");
console.log('name' in obj1_allice);
