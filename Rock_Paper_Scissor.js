console.log("Confirm that JS file link suscessfully.");

let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll(".choices");
const ResultMessage=document.querySelector(".result-message p");
const uScore=document.querySelector("#user-score p");
const CScore=document.querySelector("#computer-score p");
const resetbtn=document.querySelector("#play-agin-btn");
const fiveMatchCount=5;

const endgame=()=>{
    choices.forEach((choice)=>{
        choice.classList.add("disabled");
    })
 resetbtn.style.display="inline-block";
};

resetbtn.addEventListener("click",()=>{
    userScore=0;
    computerScore=0;
    uScore.textContent="0";
    CScore.textContent="0";
     ResultMessage.textContent = "First to 5 wins! Play your Move.";
    ResultMessage.style.backgroundColor = "#1e293b";
    choices.forEach((choice)=>{
        choice.classList.remove("disabled");
    })
     resetbtn.style.display = "none";
})
const computerChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    let generate=Math.floor(Math.random()*3);
    return options[generate];
}

const playGame=(userChoice)=>{

    let computerMove=computerChoice();
    console.log("Computer Move "+computerMove);
    let userMove=userChoice;
    console.log("User Move "+userMove);
    //  Game Rules.

    //  Ist when game is draw.
    if(userMove===computerMove){
          draw(computerMove,userMove);
    }else{
        let userWin=false;
    //  when user choose rock and Computer choose paper , Scissor.
   if(userMove==="Rock"){
          userWin=computerMove==="Scissor"?true:false;
   }
   else if(userMove==="Paper"){
        userWin=computerMove==="Rock"?true:false;
   } 
   else if(userMove==="Scissor"){
    userWin=computerMove==="Paper"?true:false;
   }
   showResult(userWin,userMove,computerMove);
}
}

//  DRAW
const draw=(computerMove,userMove)=>{
    if(computerMove===userMove){
         console.log(`Game Draw`);
         ResultMessage.textContent="Game Draw";
          ResultMessage.style.backgroundColor = "#d97706";
    }
}

//  Winner 
const showResult=(userWin,userMove,computerMove)=>{
    if(userWin){
        console.log(`User Move ${userMove} beats computer ${computerMove}`);
         ResultMessage.textContent=`User Move ${userMove} beats computer ${computerMove}`;
          ResultMessage.style.backgroundColor = "green";
         userScore++;
         uScore.textContent=userScore;
    }else{
         console.log(`Computer Move ${computerMove} beats user move ${userMove}`);
          ResultMessage.textContent=`Computer Move ${computerMove} beats user move ${userMove}`;
          ResultMessage.style.backgroundColor = "red";
          computerScore++;
          CScore.textContent=computerScore;

    }

    if(userScore===fiveMatchCount){
         ResultMessage.textContent = "🎉 Congratulations! You Won the Match!";
        ResultMessage.style.backgroundColor = "#15803d";
        endgame();
    }else if(computerScore===fiveMatchCount){
        ResultMessage.textContent = "💻 Game Over! Computer Won the Match!";
        ResultMessage.style.backgroundColor = "#b91c1c";
        endgame();
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
         const userChoice=choice.getAttribute("id");
        //  console.log("You choose "+userChoice);
        playGame(userChoice);

    })
})

