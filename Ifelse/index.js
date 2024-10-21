// IF Statements = if a condition is true, execute some code if not , do something else
//                 if not, do something else

// let licence = 13;
// if(licence >=18){
//     console.log("You are old enough to enter this site");
// }
// else{
//     console.log("You must be 18+ to enter this site");
// }

// let age = 0;
// if(age >= 100){
// console.log("You are TOO OLD to enter this site");
// }
// else if(age == 0) {
// console.log("You can't enter. You were just born.");
// }
// else if(age >= 18){
// console.log("You are old enough to enter this site");
// }
// else if(age < 0) {
// console.log("Your age can't be below 0");
// }
// else{
// console.log("You must be 18+ to enter this site");
// }
const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const result = document.getElementById("result");
let age;

mysubmit.onclick = function(){
    age = mytext.value;
    age = Number(age);
    if(age >= 100){
        console.log("You are Too Old to enter this site");
        result.textContent = `You are Too Old to enter this site`;
    }
    else if(age == 0){
        console.log("You can't enter. You were just born");
            result.textContent = `You can't enter. You were just born`;
    }   
    else if(age >=18){
        console.log("You are old enough to enter this site");
        result.textContent = `You are old enough to enter this site`
    }
    else if(age < 0){
        console.log("Your age can't be zero")
        result.textContent = `Your age can't be zero`
    }
    else{
        console.log("You must be 18+ For this")
        result.textContent = `You must be 18+ For this`;
    }
}




