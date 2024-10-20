// How To accept user Input:
// 1. Easy way = window promt
// 2. Professional way = HTML Textbox

let username = window.prompt("Enter Your Name: ");
console.log(username); // This output come in console of browser

document.getElementById("inputshow").textContent = ` ${username}`;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("myemail").value;
    document.getElementById("myh2").textContent = `Your Email Is: ${username}`;
}