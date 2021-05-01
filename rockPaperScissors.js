let rockPaperScissors = ['Rock', 'Paper' , "Scissors"]
function computerPlay() {
    let computerResult = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return computerResult;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Select Rock, Paper or Scissors.',);
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        let DrawResult = 'Match is a Draw ' + playerSelection + ' and ' + computerSelection + ' are the same. Suck a dick.'
        return DrawResult;
    } else if((playerSelection.toUppercase() == 'ROCK' && computerSelection == 'Scissors') || (playerSelection.toUppercase() == 'PAPER' && computerSelection == 'Rock') || (playerSelection.toUppercase() == 'SCISSORS' && computerSelection =='Paper')) {
        let winResult = 'You won!! ' + playerSelection + ' beats ' + computerSelection + '. You\'re a bigdickboy.';
        return winResult;
    } else if ((computerSelection == 'Rock' && playerSelection.toUppercase() == 'SCISSORS') || (computerSelection == 'Paper' && playerSelection.toUppercase() == 'ROCK') || (computerSelection == 'Scissors' && playerSelection.toUppercase() =='PAPER')) {
        let loseResult = 'You lost ' + computerSelection + ' beats ' + playerSelection + '. You suck, disgraceful performance. Your mummy dont love you no more';
        return loseResult;
    }

}