// This file contains the JavaScript logic for the application.

// Function to change the background color of a div when a button is clicked
function changeColor() {
    const box = document.getElementById('colorBox');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}

// Function to animate a box on button click
function animateBox() {
    const box = document.getElementById('animateBox');
    box.classList.toggle('animate');
}

// Event listeners for buttons
document.getElementById('colorButton').addEventListener('click', changeColor);
document.getElementById('animateButton').addEventListener('click', animateBox);
