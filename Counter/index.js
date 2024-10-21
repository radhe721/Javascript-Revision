let zero = 0;
const countlable = document.getElementById("countlable");
const firstbutton = document.getElementById("Firstbutton");
const secondbutton = document.getElementById("Secondbutton");
const thirdbutton = document.getElementById("Thirdbutton");

firstbutton.onclick = function() {
    zero++;
    countlable.textContent = zero;
}

secondbutton.onclick = function() {
    zero = 0;
    countlable.textContent = zero;
}

thirdbutton.onclick = function() {
    zero--;
    countlable.textContent = zero;
}
