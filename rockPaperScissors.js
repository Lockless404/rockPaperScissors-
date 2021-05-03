let rockPaperScissors = ['Rock', 'Paper' , "Scissors"]
function computerPlay() {
    let computerResult = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    return computerResult;
}
function playRound(playerSelection, computerSelection) {

    for (let i = 0; i <= 6; i++) {
        computerSelection = computerPlay().toLowerCase();
        playerSelection = playerSelection.toLowerCase();
        let computerScore = 0;
        let playerScore = 0;

        if (playerSelection === computerSelection) {
            let DrawResult = 'Match is a Draw ' + playerSelection + ' and ' + computerSelection + ' are the same. Suck a dick.'
            DrawResult;
        } else if ( (playerSelection === 'rock' && computerSelection === 'scissors') || 
                (playerSelection === 'paper' && computerSelection === 'rock') || 
                (playerSelection === 'scissors' && computerSelection ==='paper')) {
            playerScore = playerScore + 1;
            let winResult = 'You won!! ' + playerSelection + ' beats ' + computerSelection + '. You\'re a bigdickboy.';
            winResult;
        } else if ( (computerSelection === 'rock' && playerSelection === 'scissors') || 
                (computerSelection === 'paper' && playerSelection === 'rock') || 
                (computerSelection === 'scissors' && playerSelection ==='paper')) {
            computerScore = computerScore + 1;
            let loseResult = 'You lost ' + computerSelection + ' beats ' + playerSelection + '. You suck, disgraceful performance. Your mummy dont love you no more';
            loseResult;
        }
        
        if (playerScore === 3) {
            "You win the game. Congratulation.";
            break;
        } else if (computerScore === 3) {
            "You Lose!!! Good day sir.";
            break;
        }
    }      
}