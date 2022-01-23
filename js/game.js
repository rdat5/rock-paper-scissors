function computerPlay()
{
    const choices = ['Rock', 'Paper', 'Scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection)
{
    let result;
    let winner;
    let loser;
    let message;
    let isTie = false;

    if (playerSelection.toLowerCase() === "rock")
    {
        if (computerSelection.toLowerCase() === "rock")
        {
            result = "You Tie!";
            isTie = true;
            loser = "Rock";
        }
        else if (computerSelection.toLowerCase() === "paper")
        {
            result = "You Lose!";
            winner = "Paper";
            loser = "Rock";
        }
        else if (computerSelection.toLowerCase() === "scissors")
        {
            result = "You Win!";
            winner = "Rock";
            loser = "Scissors";
        }
    }
    else if (playerSelection.toLowerCase() === "paper")
    {
        if (computerSelection.toLowerCase() === "rock")
        {
            result = "You Win!";
            winner = "Paper";
            loser = "Rock";
        }
        else if (computerSelection.toLowerCase() === "paper")
        {
            result = "You Tie!";
            isTie = true;
            loser = "Paper";
        }
        else if (computerSelection.toLowerCase() === "scissors")
        {
            result = "You Lose!";
            winner = "Scissors";
            loser = "Paper";
        }
    }
    else if (playerSelection.toLowerCase() === "scissors")
    {
        if (computerSelection.toLowerCase() === "rock")
        {
            result = "You Lose!";
            winner = "Rock";
            loser = "Scissors";
        }
        else if (computerSelection.toLowerCase() === "paper")
        {
            result = "You Win!";
            winner = "Scissors";
            loser = "Paper";
        }
        else if (computerSelection.toLowerCase() === "scissors")
        {
            result = "You Tie!";
            isTie = true;
            loser = "Scissors";
        }
    }

    if (!isTie)
    {
        message = result + " " + winner + " beats " + loser;
    }
    else
    {
        message = result + " You both chose " + loser;
    }

    return message;
}

function game()
{
    const gameRounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < gameRounds + 1; i++)
    {
        let playerChoice = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
        let computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice));
    }
}

game();