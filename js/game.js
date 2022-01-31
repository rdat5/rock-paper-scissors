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

const rockBtn = document.querySelector('#RockBtn');
const paperBtn = document.querySelector('#PaperBtn');
const scissorsBtn = document.querySelector('#ScissorsBtn');

rockBtn.addEventListener('click', () => {
    enterChoice('rock');
});
paperBtn.addEventListener('click', () => {
    enterChoice('paper');
});
scissorsBtn.addEventListener('click', () => {
    enterChoice('scissors');
});

const resultContainer = document.querySelector('.result-container');
let gameRound = 1;
let playerScore = 0;
let computerScore = 0;
let finalResults = "";
let gameIsOver = false;

function enterChoice(choice)
{
    if (!gameIsOver)
    {
        let gameOverResults = "";

        const roundResult = document.createElement('p');
        let currentRoundResults = playRound(choice, computerPlay())
        if (currentRoundResults.includes("Win"))
        {
            playerScore += 1;
        }
        else if (currentRoundResults.includes("Lose"))
        {
            computerScore += 1;
        }

        if (playerScore >= 5 || computerScore >= 5)
        {
            if (playerScore > computerScore)
            {
                gameOverResults = "You win the game!";
            }
            else if (playerScore < computerScore)
            {
                gameOverResults = "The computer wins the game!";
            }

            gameIsOver = true;
        }

        roundResult.textContent = "Round " + gameRound + "\r\n" + 
                currentRoundResults + "\r\n" +
                "Player: " + playerScore + " | " +
                "Computer: " + computerScore + "\r\n" + 
                gameOverResults;
        roundResult.style.whiteSpace = 'pre-line';
        resultContainer.appendChild(roundResult);
        gameRound += 1;
    }

}