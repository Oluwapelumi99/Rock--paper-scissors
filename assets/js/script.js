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
  let btnRules = document.querySelector('.rules-btn')
  let btnClose = document.querySelector('.close-btn')
  let modalRules = document.querySelector('.modal')

  //**Show/Hide Rules */
  btnRules.addEventListener('click', function() {
    modalRules.classList.toggle('show-modal')
  });
  btnClose.addEventListener('click', function ()  {
    modalRules.classList.toggle('show-modal')
  });
  //**Reload Rules */
   let reloadRules = document.querySelector('.reload-btn')
   
  //**Variables */
  let rockchoice = document.getElementsByClassName('choice-rock');
  let paperchoice = document.getElementsByClassName('choice-paper');
  let scissorschoice = document.getElementsByClassName('choice-scissors');
  let lizardchoice = document.getElementsByClassName('choice-lizard');
  let spockchoice = document.getElementsByClassName('choice-spock');
  let playerChoice = ["rockChoice", "paperChoice", "scissorsChoice", "lizardChoice", "spockChoice"];
  let playerScore = 0;
  let computerScore = 0;
  let computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
  let choiceNumber = Math.floor(Math.random() * 5);
  let computerChoice = computerOptions[choiceNumber];
  let result = document.getElementById('result');
  let playerScoreBoard = document.getElementById("y-score");
  let computerScoreBoard = document.getElementById("c-score");

  function getComputerChoice() { 
   let computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
   let choiceNumber = Math.floor(Math.random() * 5);
   let computerChoice = computerOptions[choiceNumber];
   console.log(`Computer choice is ${computerChoice}`);
   return computerChoice;
   };

  

   function convert(computerChoice) {
    if(computerChoice === 'rock') return   '<i class="fa-solid fa-hand-rock"></i>'
    if(computerChoice === 'paper') return   '<i class="fa-solid fa-hand"></i>'
    if(computerChoice === 'scissors') return   '<i class="fa-solid fa-hand-scissors"></i>'
    if(computerChoice === 'lizard') return   '<i class="fa-solid fa-hand-lizard"></i>'
    return '<i class="fa-solid fa-hand-spock"></i>'
   };
   function game(playerChoice) {
    let box = document.getElementById('moves');
    box.style.display = "inline-flex";
    let playerDiv = document.getElementById('Your-icon')
    playerDiv.innerHTML = convert(playerChoice);
    let compDiv = document.getElementById('Comp-icon')
    compDiv.innerHTML = convert(computerChoice);
   };
   
  function decideWinner(you, computer) {
    if (you === computer) {
        tie();
    } else if (you === 'rock') {
      if (computer === 'paper') {
        lose();  
      }else if (computer === 'scissors') {
        win()
      } else if (computer === 'lizard') {
        win();
      } else {
        lose();
      }
    } else if (you === 'paper') {
      if (computer === 'rock') {
        win();
      }else if (computer === 'scissors') {
        lose();
      } else if (computer === 'lizard') {
        lose();
      } else {
        win();
      }
    }else if (you === 'scissors') {
      if (computer === 'rock') {
        lose();
      }else if (computer === 'paper') {
        win();
      } else if (computer === 'lizard') {
        win();
      } else {
        lose(); 
      } 
      } else if (you === 'lizard') {
        if (computer === 'rock') {
          lose();
        }else if (computer === 'paper') {
          win();
        } else if (computer === 'scissors') {
          lose();
        } else {
          win();
        } 
      } else if (you === 'spock') {
        if (computer === 'rock') {
          win();
        }else if (computer === 'paper') {
          lose();
        } else if (computer === 'scissors') {
          win();
        } else {
          lose();
        }
      }
};

  function runGame(playerChoice) {
   let computerChoice = getComputerChoice();
   decideWinner(playerChoice, computerChoice);
  };
  function win() {
    document.getElementById('result').innerHTML = "You win!";
  alert('You win');
   incrementPlayerScore();
  };
  function lose() {
    document.getElementById('result').innerHTML = "You lose..";
   alert('You lose..');
   incrementComputerScore();
  };
  function tie() {
    document.getElementById('result').innerHTML = "It's a tie";
    alert("It's a tie")
  };
   function incrementPlayerScore() {
    let playerScore = (document.getElementById('y-score').innerText);
    document.getElementById('y-score').innerText = ++playerScore;
   };
  
   function incrementComputerScore() {
    let computerScore = (document.getElementById('c-score').innerText);
    document.getElementById('c-score').innerText = ++computerScore;
   };
    