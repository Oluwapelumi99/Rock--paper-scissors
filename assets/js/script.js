document.addEventListener("DOMContentLoaded",function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
      button.addEventListener("click", function() {
      if(this.getAttribute("data-type")=== "rock", "paper", "scissors", "lizard", "spork") {
     alert()
     
   } 
      let gameType = this.getAttribute("data-type");
      runGame(gameType);
   
   })
  } })
 
  function playGame() {

  let rockchoice = document.getElementByClassName('choice-rock');
  let paperchoice = document.getElementByClassName('choice-paper');
  let scissorschoice = document.getElementByClassName('scissors');
  let lizardchoice = document.getElementByClassName('lizard');
  let spockchoice = document.getElementByClassName('spock');
  let youOptios = ["rockchoice", "paperchoice", "scissorschoice", "lizardchoice", "spockchoice"];
  let computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

}
   
  let choiceNumber = Math.floor(Math.random() * 5);
  let computerChoice = computerOptions[choiceNumber]

  function decideWinner(you, computer) {
    let result = document.getElementByClassById('result');
    let playerScoreBoard = document.getElementById(y-score);
    let computerScoreBoard = document.getElementById(p-score);
    if (you === computer) {
      result.textcontent = "It is a Tie!"
    }
    else if (you === 'rock') {
      if (computer === 'paper') {
        result.textcontent = 'Paper Covers rock <br> You lose!';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      }else if (you === 'scissors') {
        result.textcontent = 'rock crushes scissors <br> You Win!';
        playerScore++;
        playerScoreBoard.textcontent = playerScore;
        }
      } else {
        result.textContent = 'You win!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
    else if (you == 'paper') {
      if (computer == 'scissors') {
        result.textcontent = 'You lose!';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      } else {
        result.textContent = 'You win!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }else if (you == 'scissors') {
      if (computer == 'rock') {
        result.textcontent = 'You lose!';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      } else {
        result.textContent = 'You win!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }else if (you == 'rock') {
      if (computer == 'paper') {
        result.textcontent = 'You lose!';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      } else {
        result.textContent = 'You win!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }else if (you == 'rock') {
      if (computer == 'paper') {
        result.textcontent = 'You lose!';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      } else {
        result.textContent = 'You win!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
    
  }