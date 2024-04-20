var num = Math.floor(Math.random() * 100); // Initialise the number to be guessed
var min_num = 0; // Initialise the minimum number
var max_num = 100; // Initialise the maximum number
var range = document.getElementById("range"); // Get text element showing the number range
var guess_times = 0; // Initialise guess times
var guessed_times = document.getElementById("gs"); // Get text element showing guessed times

function guess() { // Function to process user input, triggered after button pressed or enter key pressed
    let input = parseInt(document.getElementById("num_input").value); // Get input value
    if (input == num) { // Winning case
        jQuery($( function() {
            $( "#dialog" ).dialog();
          } ));
        if (confirmed == true) {
            window.location.reload(); // Restart game
        }
    } else if (input < num && input < 100 && input < max_num && input > min_num) { // Smaller than number to be guessed case
        min_num = input;
        range.textContent = `${min_num} to ${max_num}! Guess again!`;
        guess_times ++;
        guessed_times.textContent = `Guessed times: ${guess_times}`;
        num_input.value = "";
    } else if (input > num && input < 100 && input < max_num && input > min_num) { // Larger than number to be guessed case
        max_num = input;
        range.textContent = `${min_num} to ${max_num}! Guess again!`;
        guess_times ++;
        guessed_times.textContent = `Guessed times: ${guess_times}`;
        num_input.value = "";
    } else { // Invalid case
        range.textContent = `${min_num} to ${max_num}! Invalid number!`;
        num_input.value = "";
    }
}

let num_input = document.getElementById("num_input");

num_input.addEventListener("keypress", function(event) { // Enter key event listener
        if (event.key === "Enter") {
          guess();
        }
      });