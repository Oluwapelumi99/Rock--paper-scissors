 document.addEventListener("DOMContentLoaded", function(){
    let buttons = this.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "rock", "paper","scissors", "lizard", "spock" ){
          console.log("You clicked " + this.getAttribute("data-type"));
        }
        let playerChoice = this.getAttribute("data-type");
      runGame(playerChoice);
        
      })
    } 
  })
  //**Modal Rules */
  const btnRules = document.querySelector('.rules-btn')
  const btnClose = document.querySelector('.close-btn')
  const modalRules = document.querySelector('.modal')

  //**Show/Hide Rules */
  btnRules.addEventListener('click', () => {
    modalRules.classList.toggle('show-modal')
  });
  btnClose.addEventListener('click', () => {
    modalRules.classList.toggle('show-modal')
  });
  //**Choices Rules */
  let rockchoice = document.getElementsByClassName('choice-rock');
  let paperchoice = document.getElementsByClassName('choice-paper');
  let scissorschoice = document.getElementsByClassName('choice-scissors');
  let lizardchoice = document.getElementsByClassName('choice-lizard');
  let spockchoice = document.getElementsByClassName('choice-spock');
  let youOptions = ["rockchoice", "paperchoice", "scissorschoice", "lizardchoice", "spockchoice"];
  let playerScore = 0;
  let computerScore = 0;

  function playGame() {
}
  function getComputerChoice() { 
   let computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
   let choiceNumber = Math.floor(Math.random() * 5);
   let computerChoice = computerOptions[choiceNumber];
   console.log(`Computer choice is ${computerChoice}`);
   return computerChoice;
   }
   
  function decideWinner(you, computer) {
    let result = document.getElementById('result');
    let playerScoreBoard = document.getElementById("y-score");
    let computerScoreBoard = document.getElementById("p-score");
    if (you === computer) {
      result.textContent = 'It is a tie!'
    } else if (you === 'rock') {
      if (computer === 'paper') {
        result.textcontent = 'Paper Covers rock.You lose!';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      }else if (computer === 'scissors') {
        result.textcontent = 'rock crushes scissors. You Win!';
        playerScore++;
        playerScoreBoard.textcontent = playerScore;
      } else if (computer === 'lizard') {
        result.textContent = 'rock crushes lizard. You win!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      } else {
        result.textContent = 'spock vaporizes rock. You lose!';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      }
    } else if (you === 'paper') {
      if (computer === 'rock') {
        result.textcontent = 'Paper Covers rock. You win!';
        playerScore++;
        playerScoreBoard.textcontent = playerScore;
      }else if (computer === 'scissors') {
        result.textcontent = 'scissors cuts paper. You lose';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      } else if (computer === 'lizard') {
        result.textContent = 'lizard eats paper. You lose';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      } else {
        result.textContent = 'paper disproves spock. You Win!'
        playerScore++;
        playerScoreBoard.textcontent = playerScore;
      }
    }else if (you === 'scissors') {
      if (computer === 'rock') {
        result.textcontent = 'rock crushes scissors. You lose';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      }else if (computer === 'paper') {
        result.textcontent = 'scissors cuts paper. You Win!';
        playerScore++;
        playerScoreBoard.textcontent = playerScore;
      } else if (computer === 'lizard') {
        result.textContent = 'scissors decapitates lizard. You win!';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      } else {
        result.textContent = 'spock smashes scissors. You lose';
        computerScore++;
        computerScoreBoard.textcontent = computerScore;
      } 
      } else if (you === 'lizard') {
        if (computer === 'rock') {
          result.textcontent = 'Rock crushes lizard. You lose';
          computerScore++;
          computerScoreBoard.textcontent = computerScore;
        }else if (computer === 'paper') {
          result.textcontent = 'lizard eats paper. You Win!';
          playerScore++;
          playerScoreBoard.textcontent = playerScore;
        } else if (computer === 'scissors') {
          result.textContent = 'scissors decapitates lizard. You lose';
          computerScore++;
          computerScoreBoard.textcontent = computerScore;
        } else {
          result.textContent = 'lizard poisons spock. You Win!'
          playerScore++;
          playerScoreBoard.textcontent = playerScore;
        } 
      } else if (you === 'spock') {
        if (computer === 'rock') {
          result.textcontent = 'spock vaporizes rock. You Win!';
          playerScore++;
          playerScoreBoard.textcontent = playerScore;
        }else if (computer === 'paper') {
          result.textcontent = 'paper disproves spock. You lose';
          computerScore++;
          computerScoreBoard.textcontent = computerScore;
        } else if (computer === 'scissors') {
          result.textContent = 'spock smashes scissors. You win!';
          playerScore++;
          playerScoreBoard.textContent = playerScore;
        } else {
          result.textContent = 'lizard poisons spock. You lose';
          computerScore++;
          computerScoreBoard.textcontent = computerScore;
        }
      }
};

  function runGame(playerChoice) {
   let computerChoice = getComputerChoice();
   decideWinner(playerChoice, computerChoice);
  };
