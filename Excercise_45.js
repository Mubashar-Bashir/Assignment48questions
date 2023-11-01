/////////////////////////////////////////////////////////////////////
//          Name: Mubashar Bashir Batch :Q1-47                     //
//          Roll No: PIAIC219867 : Year	2023                       //
/////////////////////////////////////////////////////////////////////
/**                     45. Cars:
 * Write a function that stores information about a car in a Object.
 * The function should always receive a manufacturer and a model name.
 * It should then accept an arbitrary number of keyword arguments.
 * Call the function with the required information and
 * two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information
was stored correctly
 */
var myCar = {}; // Create an empty Vehicle object
function vhl_detail(vhl_name, mfect, args) {
    this.Vhl_Name = vhl_name;
    this.Vhl_Menufect = mfect;
    // Store additional properties from the args object
    for (var key in args) {
        if (args.hasOwnProperty(key)) {
            this[key] = args[key];
        }
    }
}
// Example usage:
vhl_detail.call(myCar, "MyCar", 2022, { Vhl_Maker: "Toyota", Vhl_Make: "Corolla",
    Vhl_Engin_CC: 1500, Color: "RED", Transmission: "Auto" });
console.log(myCar);
vhl_detail.call(myCar, "MyCar2", 2023, { Vhl_Maker: "Suzuki", Vhl_Make: "Swift",
    Vhl_Engin_CC: 1600, Color: "GREY", Transmission: "Auto" });
console.log(myCar);
