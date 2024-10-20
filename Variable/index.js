// window.alert("This is variable page Second Chapeter");

// Variable = A container That Store a value is a Variable.
//            Behaves as if it were the value it contains.

// 1. declaration let x;
// 2. assignment x = 100
// We can't Declare same variable like here 
// we can't declare let x; 
// or againe let x; They Throught Error of Variable redeclare

// let x;
// x = 100
// console.log(x)

// The output is 100
// Here all Data Type is number (Numerical Datatype)

// let age = 25; // number
// let price = 199.99  // number
// let gpa = 2.1; // mumber 

// console.log(typeof(age));
// console.log(`You are ${age} Now`)
// console.log(typeof(gpa));

// Different way of assigning type of

// console.log(typeof price);

// Here all Data Type is String (String Datatype)

// let firstname;
// firstname = `Radhe`
// console.log(typeof firstname); // This is Data type : string
// console.log(`Your name is: ${firstname}`);

// Let's  Disscus about Boolean datatype variable is javascript:

// ----->The Boolean Datatype is a datatype That Show the result in True or False: 

// let online = false;
// let forSale = true;
// let isStudent = true;

// We are using if else statement in javascirpt for Checking Boolean variable output

// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled : ${isStudent}`);

fullname = 'Radhe';
age = '25';
isStudent = 'false';

document.getElementById("p1").textContent = `Your Name is : ${fullname}`;
document.getElementById("p2").textContent = `Your Age is : ${age}`;
document.getElementById("p3").textContent = `You are Student or Not: ${isStudent}`;