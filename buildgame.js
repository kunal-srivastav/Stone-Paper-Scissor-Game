// let userScore = 0;
// let compScore = 0;

// let msgbox = document.querySelector("#move");
// let userscorepara = document.querySelector("#user-score");
// let compscorepara = document.querySelector("#comp-score");
// const choices = document.querySelectorAll(".option");

// const checkWin  = (userChoice,CompChoice) => {
//     if(userChoice == "paper" && CompChoice == "scissor"){
//         msgbox.innerText = "You lost .Scissor beats Paper";
//         msgbox.style.backgroundColor = "red";
//         compScore++;
//         compscorepara.innerText = compScore;
//       }
//       else if(userChoice == "rock" && CompChoice == "paper"){
//         msgbox.innerText = "You lost .Paper beats Rock";
//         msgbox.style.backgroundColor = "red";
//         compScore++;
//         compscorepara.innerText = compScore;
//       }
//       else if(userChoice == "paper" && CompChoice == "rock"){
//         msgbox.innerText = "You Win .Paper beats rock";
//         msgbox.style.backgroundColor = "green";
//         userScore++;
//         userscorepara.innerText = userScore;
//       }
//       else if(userChoice == "rock" && CompChoice == "scissor"){
//         msgbox.innerText = "You Win .Rock beats Scissor";
//         msgbox.style.backgroundColor = "green";
//         userScore++;
//         userscorepara.innerText = userScore;
//       }
//       else if(userChoice == "scissor" && CompChoice == "paper"){
//         msgbox.innerText = "You Win .Scissor beats Paper";
//         msgbox.style.backgroundColor = "green";
//         userScore++;
//         userscorepara.innerText = userScore;
//       }
//       else if(userChoice == "scissor" && CompChoice == "rock"){
//         msgbox.innerText = "You lost .Rock beats Scissor";
//         msgbox.style.backgroundColor = "red";
//         compScore++;
//         compscorepara.innerText = compScore;
//       }
//       else{
//         msgbox.innerText = "Game was Draw .Play again";
//         msgbox.style.backgroundColor = "black"
//       }
// }

// const genCompchoice = () =>{
//     const choice = ["rock", "paper", "scissor"];
//     const randomidx = Math.floor(Math.random()*3);
//     return choice[randomidx];
// }


// const playgame = (userChoice) => {
//   console.log(`userChoice = ${userChoice}`);
//   const CompChoice = genCompchoice();
//   console.log(`computerChoice = ${CompChoice}`);
//   checkWin(userChoice,CompChoice)
// }

// choices.forEach((choice) => {
//     choice.addEventListener("click",() =>{
//         const userChoice = choice.getAttribute("id");
//         playgame(userChoice);
//     })
// })

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".option");
const msgbox = document.querySelector("#move");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const showWinner = (userWin,userChoice,computerChoice) => {
  if(userWin){
    userScore++;
    msgbox.innerText = `You Win !Your ${userChoice} beats ${computerChoice}`;
    msgbox.style.backgroundColor = "green";
    userScorepara.innerText = userScore;
  }
  else{
    compScore++;
    msgbox.innerText = `You lost.${computerChoice} beats Your ${userChoice}`;
    msgbox.style.backgroundColor = "red";
    compScorepara.innerText = compScore;
  }
}

const checkWin = (userChoice,computerChoice) => {
  if(userChoice == computerChoice){
     msgbox.innerText = "Game was Draw";
     msgbox.style.backgroundColor = "blue";
  }
  else{
    let userWin = true;
    if(userChoice == "rock"){
       userWin = computerChoice == "paper"? false : true;
    }
    else if(userChoice == "scissor"){
      userWin = computerChoice == "rock"? false : true;
    }

    else {
      userWin = computerChoice == "rock"? true : false;
    }

  showWinner(userWin,userChoice,computerChoice);
}
}

const genCompchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randomidx = Math.floor(Math.random()*3);
    return option[randomidx];
}

choices.forEach((choice) => {
  choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    const computerChoice = genCompchoice();
    checkWin(userChoice,computerChoice);
  })
})