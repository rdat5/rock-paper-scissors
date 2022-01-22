let choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay()
{
    return choices[Math.floor(Math.random() * choices.length)];
}