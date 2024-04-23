 /**
  * 
  */
 document.addEventListener("DOMContentLoaded", addGameTileListeners);
  function addGameTileListeners(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", gameTileListeners);
    } 
  }
   function gameTileListeners() {
    let playerChoice = this.getAttribute("data-type");
  runGame(playerChoice);
  } 
  function removeGameTileListeners() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
      button.removeEventListener('click', gameTileListeners);
    }
  }
  //**Modal Rules */
  let btnRules = document.querySelector('.rules-btn');
  let btnClose = document.querySelector('.close-btn');
  let modalRules = document.querySelector('.modal');

  //**Show/Hide Rules */
  btnRules.addEventListener('click', function() {
    modalRules.classList.toggle('show-modal');
  });
  btnClose.addEventListener('click', function ()  {
    modalRules.classList.toggle('show-modal');
  });
  //**Reload Rules */
  let reloadRules = document.getElementById('reload-btn');
   reloadRules.addEventListener('click', function() {
    window.location.reload();
    reloadRules.innerText= 'Restart';
    reloadRules.style.display = 'flex';
    
   });
   
  //**Variables */
  
  

  /** Gets a random choice for computer */
  function getComputerChoice() { 
   let computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
   let choiceNumber = Math.floor(Math.random() * 5);
   let computerChoice = computerOptions[choiceNumber];
   return computerChoice;
   }

  
   /** Converts computer Choice words into their icons*/
   function convert(computerChoice) {
    if(computerChoice === 'rock') return '<i class="fa-solid fa-hand-rock"></i>';
    if(computerChoice === 'paper') return '<i class="fa-solid fa-hand"></i>';
    if(computerChoice === 'scissors') return '<i class="fa-solid fa-hand-scissors"></i>';
    if(computerChoice === 'lizard') return '<i class="fa-solid fa-hand-lizard"></i>';
    return '<i class="fa-solid fa-hand-spock"></i>';
   }

   /** Gets player choice and computer choice to display below the options */
   function game(playerChoice, computerChoice) {
    let box = document.getElementById('moves');
    box.style.display = "inline-flex";
    let playerDiv = document.getElementById('Your-icon');
    playerDiv.innerHTML = convert(playerChoice);
    let compDiv = document.getElementById('Comp-icon');
    compDiv.innerHTML = convert(computerChoice);
   }
   
  function decideWinner(you, computer) {
    if (you === computer) {
        tie();
    } else if (you === 'rock') {
      if (computer === 'paper') {
        lose();  
      }else if (computer === 'scissors') {
        win();
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
}

  function runGame(playerChoice) {
    removeGameTileListeners();
   let computerChoice = getComputerChoice();
   game(playerChoice, computerChoice);
   decideWinner(playerChoice, computerChoice);
  }

  /**
   * Displays results based on player and computer choice
   */
  function win() {
    setTimeout(function() {
      document.getElementById('result').innerHTML = "You win!";
      incrementPlayerScore();
      decreaseMovesLeft();
      addGameTileListeners();
    }, 500);
  }
  function lose() {
    setTimeout(function() {
      document.getElementById('result').innerHTML = "You lose..";
      incrementComputerScore(); 
      decreaseMovesLeft();
      addGameTileListeners();
    }, 500);
  }
  function tie() {
    setTimeout(function() {
    document.getElementById('result').innerHTML = "It's a tie";  
    addGameTileListeners();
    }, 500);
  }

  /**Gets the current player score and increases it by 1 after each win */
   function incrementPlayerScore() {
    let playerScore = (document.getElementById('y-score').innerText);
    document.getElementById('y-score').innerText = ++playerScore;
   }

   /**Gets the current player score and increases it by 1 after each win */
   function incrementComputerScore() {
    let computerScore = (document.getElementById('c-score').innerText);
    document.getElementById('c-score').innerText = ++computerScore;
   }

   /** Reduces Moves left to reach game over and decide winner */
   function decreaseMovesLeft() {
    let movesLeftSpan = document.getElementById('moves-left');
    let movesLeft = parseInt(movesLeftSpan.innerText);
    let newMovesLeft = movesLeft - 1;

    if (newMovesLeft > 0) {
      movesLeftSpan.innerText = newMovesLeft; 
    }
    else {
      endGame(movesLeftSpan);
    }
   }
    
  function endGame(movesLeftSpan) {
      let pickChoice = document.getElementById('choice');
      let result = document.getElementById('result');
      let reloadRules = document.getElementById('reload-btn');
      let buttons = document.getElementsByTagName("button");
      for (let button of buttons) {
          button.style.display = "none";
      }

      pickChoice.innerText = 'Game over !!';
      movesLeftSpan.style.display = 'none';
      let playerChoice = document.getElementById('you');
      let computerChoice = document.getElementById('comp');
      playerChoice.style.display = 'none';
      computerChoice.style.display = 'none';
      let playerScore = parseInt(document.getElementById('y-score').innerText);
      let computerScore = parseInt(document.getElementById('c-score').innerText);
      if (playerScore > computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game';
        result.style.color = 'black';
      } else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'black';
      } else {
        result.style.fontSize = '2rem';
        result.innerText = 'It was a tie';
        result.style.color = 'black';
      }
      reloadRules.innerText= 'Restart';
      reloadRules.style.display = 'flex';
      reloadRules.addEventListener('click', function() {
        window.location.reload();
       });
    }
  