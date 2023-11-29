let randomNumber = parseInt(Math.random()*100 +1);
// console.log(randomNumber,'first time');

// variables 
const userInput = document.querySelector('.user_input');
const submitBtn = document.querySelector('.submit_btn');
const guessSpan = document.querySelector('.guess');
const noguessSpan = document.querySelector('.No_guess');
const resultDiv = document.querySelector('.result');
const mainBtn = document.querySelector('.main_btn');

let playGame = true;
let noguess = 1;
let prevGuess = [];

if(playGame){
    submitBtn.addEventListener('click',function(e){
        e.preventDefault();
        // console.log(randomNumber)
        validateGuess(userInput.value)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter a Number, Cheratctor Don't Allowed");
    } else if(guess < 1){
        alert("Enter Bigger Number");
    } else if(guess > 100){
        alert("Enter Samlled Number");
    }
    else{
        const guessNum = parseInt(guess);
        prevGuess.push(guessNum);
        if(noguess == 11){
            displayMassage(`Game Over! Random Num is: ${randomNumber}`);
            endGame()
        } else{
            displayGuess(prevGuess)
            checkGuess(guessNum)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMassage("You Win!");
        userInput.value = ''
        endGame()
    } else if(guess < randomNumber){
        displayMassage("Your Guess too high")
    } else if(guess > randomNumber){
        displayMassage("Your Guess too low")
    }

}
function displayGuess(guess){
    userInput.value = ''
    guessSpan.innerHTML = prevGuess;
    noguess++;
    noguessSpan.innerHTML = `${11-noguess}`
}
function displayMassage(massaage){
    resultDiv.innerHTML = massaage
}
function endGame(){
    playGame = false;
    mainBtn.removeAttribute("hidden");
    userInput.setAttribute("disabled",'');
    submitBtn.setAttribute("hidden",'')
    newGame()
}
function newGame(){
    mainBtn.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100 +1);
        // console.log(randomNumber,"secound time")
        noguess = 1
        prevGuess = []
        playGame = true;
        noguessSpan.innerHTML = `${11 - noguess}`
        guessSpan.innerHTML = ''
        resultDiv.innerHTML = ''
        mainBtn.setAttribute("hidden",'');
        userInput.removeAttribute("disabled");
        submitBtn.removeAttribute("hidden")
    })
}