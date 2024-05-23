// Initialize countdown values
let days = 10;
let hours = 10;
let minutes = 42;
let seconds = 59;

// Function to update the countdown display
function updateDisplay() {
  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
}

// Function to decrement the countdown values
function decrementValues() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes < 0) {
    minutes = 59;
    hours--;
  }
  if (hours < 0) {
    hours = 23;
    days--;
  }
  if (days < 0 || (days == 0 && hours == 0 && minutes == 0 && seconds == 0)) {
    clearInterval(countdownTimer);
    alert("Countdown finished!");
  } else {
    updateDisplay();
  }
}

// Start the countdown
updateDisplay(); // Initial display setup
const countdownTimer = setInterval(decrementValues, 1000);
