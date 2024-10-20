// type conversion = change the datatype of a value to another
//  (string, numbers, booleans)

                    // The output is come : You enter age + 1 like ( 25 + 1) Because its String
// You can see by going on Chrome Inspect (Ctrl+Shift+C)

// Prompt the user for their age
let age = window.prompt("How old are you? ");

// Incrementing the age directly adds 1 to the string
age += 1; // This results in string concatenation

console.log(age); // Outputs the concatenated result as a string

// Convert the age to a number
age = Number(age);
console.log(age); // Outputs the numeric value of age

// Now, increment the age correctly
// let's Covert To Number 
age++; // Increment the age by 1 
console.log(age); // Outputs the incremented numeric value



// let x;
// let y;
// let z;
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);