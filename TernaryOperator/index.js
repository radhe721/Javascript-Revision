// ternary operator = a shortcut to if{} and else{} statements
            //   helps to assign a variable based on a condition 
            //   condition ? codeIfTrue : codeIfFalse;

let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minnor";
console.log(message);

// if(age >= 18){
//     message = "You're an adult";
// }
// else{
//     message = "You're an minor";
// }

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount *(discount/100)}`);