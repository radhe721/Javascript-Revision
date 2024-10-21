// Random Number Generator

const roll = document.getElementById("roll");
const mylable = document.getElementById("mylable")
const min = 1;
const max = 6;
let randomNum;

roll.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    mylable.textContent = randomNum;
}