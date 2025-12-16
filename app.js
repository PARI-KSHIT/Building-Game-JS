// let userScore = 0;
// let copScore = 0;



// const choices = document.querySelectorAll(".choice");
//  const msg = document.querySelector("#msg");

//  const userScorepara = document.querySelector("#user-score");
// const compScorepara = document.querySelector("#comp-score");

// const gencompchoice =() =>{
//     const options=["rock", "paper", "scissors"];
//    const randidx = Math.floor(Math.random() * 3);
//    return options[randidx];
//     // rock, paper, scissors
// }

//  const drawGame = ()=> {
   

//  }  ;
 
//    const showWinner = (userWin) => {
//     if( userWin){
//         userScore++;
        
//         // console.log("You Win!");
//         msg.innerText = "You win!";
//         // msg.Style.backgroundcolour = "green";
//     } else{
//         copScore++;
       
//         // console.log("you lose");
//         msg.innerText = "You lose!";
//         //  msg.Style.backgroundcolour = "red";
//     }

//        function newFunction_1() {
//            compScorepara.innerText = compScorepara;
//        }

//        function newFunction() {
//            userScorepara.innerText = userScore;
//        }
//    }
// function playgame(userchoice) {
//     console.log("user choice =", userchoice);
//     // generate computer choice.
//     const compchoice = gencompchoice();
//     console.log("comp choice =", compchoice);


//     if (userchoice === compchoice) {
//         //draw game
//         drawGame();
//     } else {
//         let userWin = true;
//         if (userchoice === "rock") {
//             userWin = compchoice === "paper " ? false : true;
//         } else if (userchoice === "paper ") {
//             userWin = compchoice === " scissors" ? false : true;
//         } else {
//             userWin = compchoice === "rock" ? false : true;
//         }
//          showWinner(userWin);
//     }


// }

//   choices.forEach((choice) =>{
    
//     choice.addEventListener("click", () =>{
//         const userChoice = choice.getAttribute("id");
        
//         playgame (userChoice);
//     });

// });


let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});