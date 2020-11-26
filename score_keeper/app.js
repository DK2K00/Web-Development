const p1 =
{
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
}
const p2 =
{
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
}
const resetButton = document.querySelector("#reset");
const scoreKeeper = document.querySelector("#playTo");
let winningScore = 3;
let gameOver = false;

function updateScore(player, opponent)
{
    if(!gameOver)
    {
        player.score += 1;

        if(player.score === winningScore)
        {
            gameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
        }
    player.display.textContent = player.score;
    }
}

p1.button.addEventListener("click", function()
{
    updateScore(p1,p2);
});

p2.button.addEventListener("click", function()
{
    updateScore(p2,p1);
});

scoreKeeper.addEventListener("change", function()
{
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener("click", reset);

function reset()
{
    for(let p of [p1,p2])
    {
        p.score = 0;
        p.button.disabled = false;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
    }
    gameOver = false;
}