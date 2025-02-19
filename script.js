let counter = 0;
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Function to increment counter
function incrementCounter() {
    counter++;
    counterElement.textContent = counter;
}

// Function to decrement counter
function decrementCounter() {
    counter--;
    counterElement.textContent = counter;
}

// Function to reset counter
function resetCounter() {
    counter = 0;
    counterElement.textContent = counter;
}

// Add event listeners to buttons
incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener('click', resetCounter);
