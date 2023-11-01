/*                      44. Sandwiches:
Write a function that accepts an array of items a person wants on a
sandwich.
The function should have one parameter that collects as many items as
the function call provides,
and it should print a summary of the sandwich that is
being ordered.
Call the function three times, using a different number of
arguments each time.
*/
function makeSandwich() {
    var rest_items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest_items[_i] = arguments[_i];
    }
    var sandwich = [];
    var count = rest_items.length;
    var i = 0;
    rest_items.forEach(function (element) {
        sandwich[i] = element;
        i++;
        //    console.log(sandwich[i]);    
    });
    return sandwich;
}
var list_item1 = ["Bread",
    "Meat",
    "Cheese",
    "Vegetables",
    "Condiments",
    "Spreads",
    "Extras ",
    "Herbs and spices (oregano)",
    "Sauces (hot sauce)",
    "Eggs (fried breakfast sandwiches)"];
var person1_sandwitch = makeSandwich.apply(void 0, list_item1);
console.log('Person 1 Sandwitch is ready : ', person1_sandwitch);
var sandwichIngredients = ["Bread", "Turkey", "Lettuce", "Tomato", "Mayonnaise"];
var mySandwich = makeSandwich.apply(void 0, sandwichIngredients);
console.log("Your Sandwitch is Ready", mySandwich);
var person2_sandwitch = makeSandwich("Bread", "Ham", "Swiss cheese", "Lettuce");
console.log("Person 2 Sandwitch is Ready: ", person2_sandwitch);
