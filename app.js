// Assign the variables 

let guess = document.querySelector("#guess"),
    submit = document.querySelector("#submit"),
    inform = document.querySelector("#inform"),
    randomNum = (Math.floor(Math.random()*10) + 1),
    guessLeft = 3;



// Event listner for submit

//on click -> the submitted value will be checked , creat a function that evaluetes the value

submit.addEventListener("mousedown", function calculator (x) {
    x = Number(guess.value);
   
    if(isNaN(x) || x > 10 || x < 1) {
         // Validation 
        inform.innerHTML = "Please enter a valid number between 1 - 10";
        
    } else if(x == randomNum) {
        //If the user got the right number
        inform.innerHTML = "You have got the number!";
        inform.style.color = "green";
        guess.style.borderColor = "green";
        guess.disabled = true;
    } else {
        //If the number guessed is wrong more than treen times
        guessLeft -= 1;
        if(guessLeft === 0) {
          inform.innerHTML = `You have lost the game! The correct number is ${randomNum}`;
          inform.style.color = "red";
          guess.disabled = true; 
          submit.disabled = true; 
        }
        else {
        //If the user got wrong only twise 
        guess.value = ""
        inform.innerHTML = `Try again, you have ${guessLeft} attempts left`;
        inform.style.color = "red";
        guess.style.borderColor = "red";
        }
    }
})





