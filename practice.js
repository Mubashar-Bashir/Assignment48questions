// import { log } from "console"
// import { spec } from "node:test/reporters";
// import { Z_UNKNOWN } from "zlib";
// let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet(pet) {
    console.log("Hello, " + pet.name);
}
//  greet(dog); // OK
// let dog:Pet={name:'lessi',owner="Jessica"};
//let x = (a: number) => 0;
var y = function (b, s) { return 0; };
// y = x; // OK
//x = y; // Error
var x = function (a, b) {
};
function sum1(a, b) {
    // Function body goes here
}
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
//let status = Status.Ready;
//status=Status.Waiting;
//status=Color.Green;
//let Cool = Color.Green; // Error
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var test_any_to_unnown = a; //ok 
test_any_to_unnown = b; //ok 
test_any_to_unnown = true; //ok
var x1 = 4;
console.log(x1.length);
// define our tuple
// let ourTuple: [number, boolean, string];
// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// // We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');
// console.log(ourTuple);
// console.log(ourTuple.length);
// define our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
