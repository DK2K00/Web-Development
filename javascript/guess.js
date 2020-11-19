let max = parseInt(prompt("Enter the maximum range: "));

while(!max)
{
    max = parseInt(prompt("Entera valid number: "));
}

const noToGuess = Math.floor(Math.random() * max) + 1;
console.log(noToGuess);

let guess = parseInt(prompt("Guess a number: "));

while(parseInt(guess) !== noToGuess)
{
    if(guess > noToGuess)
    {
        console.log("Guess too high.")
        guess = prompt("Guess a number: ");
    }

    else if(guess < noToGuess)
    {
        console.log("Guess to low.");
        guess = prompt("Guess a number: ");
    }

    else if(guess === 'q')
    {
        console.log("Game Over!");
        break;
    }

    else
    {
        console.log("You guessed it!");
        break;
    }
}

