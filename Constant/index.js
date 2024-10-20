const pi = 3.14159; // pi value is constant and can't change
let radius;
let circumference;
let area;

document.getElementById("mysubmit").onclick = function() {
    radius = Number(document.getElementById("mytext").value); // Convert input to number
    if (!isNaN(radius) && radius > 0) { // Check if the radius is a valid positive number
        circumference = 2 * pi * radius;
        area = pi * radius * radius; // Calculate area of the circle

        document.getElementById("myh1").textContent = "Circumference: " + circumference + ", Area: " + area;
    } else {
        document.getElementById("myh1").textContent = "Please enter a valid positive number for the radius.";
    }
};
