/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function getRandomColor() {
    // Generate a random RGB color
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function DrawComplexSpiral(context) {
    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();

    // Set the line width to make the lines bold
    context.lineWidth = 5;

    // Create a logarithmic spiral by increasing distance logarithmically
    for (let counter = 1; counter < 90; counter++) {
        let distance = Math.log(counter) * 45;  // Logarithmic growth of distance
        
        // Change the color before each line segment
        context.strokeStyle = getRandomColor();
        
        moveForward(distance, context);
        context.stroke();
        
        // Turn the spiral
        turnRight(70); // Turn right by 70 degrees for a smoother spiral
    }
}

// Greeting message based on time
function greeting(){
    var d = new Date();
    var time = d.getHours();
    if (time <= 12 & time > 6) {
        document.write("&emsp;<b>Good morning, user!</b>");
        }
    if (time >= 18 & time < 23) {
        document.write("&emsp;<b>Good evening, user!</b>");
    }
    if (time > 12 & time < 18) {
        document.write("&emsp;<b>Good afternoon, user!</b>");
    }
    if (time <= 6 || time >= 23) {
        document.write("&emsp;<b>Good night, user!</b>");
    }
}

greeting();
