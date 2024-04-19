var num = Math.floor(Math.random() * 100);
var min_num = 0;
var max_num = 100;
var range = document.getElementById("range");
var guess_times = 0;
var guessed_times = document.getElementById("gs");

function guess() {
    let input = parseInt(document.getElementById("num_input").value);
    if (input == num) {
        var confirmed = confirm(`Congratulations! You have won the game! Play again? 
Total guessed times: ${guess_times}`);
        if (confirmed == true) {
            window.location.reload();
        }
    } else if (input < num && input < 100 && input < max_num && input > min_num) {
        min_num = input;
        range.textContent = `${min_num} to ${max_num}! Guess again!`;
        guess_times ++;
        guessed_times.textContent = `Guessed times: ${guess_times}`;
    } else if (input > num && input < 100 && input < max_num && input > min_num) {
        max_num = input;
        range.textContent = `${min_num} to ${max_num}! Guess again!`;
        guess_times ++;
        guessed_times.textContent = `Guessed times: ${guess_times}`;
    } else {
        range.textContent = `${min_num} to ${max_num}! Invalid number!`;
    }
}