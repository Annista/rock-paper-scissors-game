
const mainDiv= document.querySelector("#main-div");

const selectorButtonsDiv= document.createElement("div");
selectorButtonsDiv.setAttribute("id", "selector-buttons-div");

const rockBtn= document.createElement("button");
const paperBtn= document.createElement("button");
const scissorsBtn= document.createElement("button"); //Creating three buttons, one for each selection

rockBtn.textContent="ROCK";
paperBtn.textContent="PAPER";
scissorsBtn.textContent="SCISSORS";

rockBtn.setAttribute("data-play", "ROCK");
paperBtn.setAttribute("data-play", "PAPER");
scissorsBtn.setAttribute("data-play", "SCISSORS"); //Add a data attribute to each button called data-play

const selectorBtn= [rockBtn, paperBtn, scissorsBtn];//placing the buttons in an array so that they can be 
                                                    //manipulated in an iteration, which requires less code
                                                    //than doing so individually

const roundDiv= document.createElement("div");  //This div will contain roundScoreDiv shown below
roundDiv.classList.add("body-text");
roundDiv.setAttribute("id", "round-div");


const playsDiv= document.createElement("div");
playsDiv.setAttribute("id", "plays-div");
const userPlayDiv= document.createElement("div");
userPlayDiv.setAttribute("id", "user-play-div");
const userPlayText= document.createElement("span");
userPlayText.classList.add("body-text");
const compPlayDiv= document.createElement("div");
compPlayDiv.setAttribute("id", "comp-play-div");
const compPlayText= document.createElement("span");
compPlayText.classList.add("body-text");

const resultTextDiv= document.createElement("div"); //This div will contain the (round) result text shown below
const resultText= document.createElement("p"); 
resultTextDiv.setAttribute("id", "result-text-div");



const roundScoreDiv= document.createElement("div");  //This div will contain playerScoreDiv and compScoreDiv
roundScoreDiv.setAttribute("id", "round-score-div"); //shown below
roundScoreDiv.classList.add("body-text"); 

const playerScoreDiv= document.createElement("div");  //Creating divs to contain the scores text 
const compScoreDiv= document.createElement("div");    //at lines 29-32
playerScoreDiv.setAttribute("id", "player-score-div");
compScoreDiv.setAttribute("id", "computer-score-div");
 
const playerScoreLabel= document.createElement("p"); //These p elements are for displaying the scores at a given
const compScoreLabel= document.createElement("p");  //time
const compScoreText= document.createElement("p");
const playerScoreText= document.createElement("p");

/*playerScoreDiv.classList.add("");
compScoreDiv.classList.add("");*/




    



selectorBtn.forEach((button)=> { //All three button will be styled, share a class, and added to the 
    button.style.margin= '10px'; //selectorButtonsDiv
    button.classList.add("selector-button");
    selectorButtonsDiv.appendChild(button);

    
    });

    function checkForButtons(){

    let selectBtnList= document.getElementsByClassName("selector-button");

        return (selectBtnList.length > 0);


    }





function computerPlay(){

    
    let choice; //Create a variable called 'choice'

    choice= Math.floor(Math.random()*3) + 1; //Assign choice a random number between 1 and 3

    switch(choice){ //Evaluate the number stored in choice
        case 1:
            return "ROCK"; //If choice is equal to 1, return the string "ROCK" 
            break;

        case 2:
            return "PAPER"; //If choice is equal to 2,return the string "PAPER" 
            break;
            
        case 3:
            return "SCISSORS"; //If choice is equal to 3, return the string "SCISSORS"
            break;

        default:
            console.log("Something went wrong, please try again..."); //If choice is not between 1 and 3, output an error message

    }

}



function playRound(playSelection, computerSelection){
   let playerSelectionUpper= playSelection.toUpperCase(); 
        //whatever the user enters (which is then stored in playSeletion) is converted to uppercase, 
        //thus making it case-insensitive.
        
    switch(playerSelectionUpper){ //Evaluating the variable playerSelectionUpper

        case 'ROCK':                        
            if(computerSelection==='SCISSORS'){ 
                resultText.textContent= "You Win, Rock beats Scissors"; //Tells the user who won the round
                return "user";  //These return statements identify the winner in each round      
                
            }else if(computerSelection==='PAPER'){           
                resultText.textContent= "You Lose, Paper beats Rock";
                    return "comp";  
                    
                  }else if(computerSelection==='ROCK'){   
                    resultText.textContent= "It's a tie";     
                            return "none";                 
                        }

        
        case 'PAPER':                        
            if(computerSelection==='ROCK'){            
                resultText.textContent= "You Win, Paper beats Rock";    
                 return "user";
                 
            }else if(computerSelection==='SCISSORS'){        
                resultText.textContent= "You Lose, Scissors beats Paper"; 
                    return "comp";

                }else if(computerSelection==='PAPER'){    
                    resultText.textContent= "It's a tie";         
                            return "none";
                        }

        
        case 'SCISSORS':            
            if(computerSelection==='PAPER'){             
                resultText.textContent= "You Win, Scissors beats Paper";  
                return "user";

            }else if(computerSelection==='ROCK'){            
                resultText.textContent= "You Lose, Rock beats Scissors"; 
                    return "comp";

                }else if(computerSelection==='SCISSORS'){   
                    resultText.textContent= "It's a tie";                 
                        return "none";

                    }



        default:                                              
            console.log("Invalid word entered by user. Try again"); 
                                                              

    }

      
}
 
    

    function playAgainstComputer(uplay){
            
                let roundInfo;
                const playerSelection= uplay;
                const computerSelection=computerPlay(); 
                //function is called to get the computers play (see lines 1-26)

                const rWinner= playRound(playerSelection, computerSelection);
                //function playRound() returns a string that says the winner of the round
                //which is why the function call is assigned to 'rWinner'

                roundInfo= [playerSelection, computerSelection, rWinner];
                //This array stores information about the game round, namely, the person's play, the computer's
                //play, and the winner of the round

                

                return roundInfo; //The third item in this array will be evaluated in the startGame() function
                                //see lines 301- 305
    }


    function showScores(uScore, cScore){ //Displays the scores of each player in the console

      
        playerScoreLabel.textContent= "Your Score";
        compScoreLabel.textContent= "Computer's Score";

        playerScoreText.textContent= `${uScore}`;
        compScoreText.textContent= `${cScore}`;

       


       
    }

    function showGameResults(uScore, cScore){ //Displays the overall result of the game
        const finalResultsDiv= document.createElement("div");
        const finalResultsText= document.createElement("p");
        const finalScoresText= document.createElement("p");

        finalResultsDiv.classList.add("body-text");
        
        if (uScore > cScore){
            finalResultsText.textContent=`Yay, you won the game!!`;
            
            
  
        }else if(uScore < cScore){
            finalResultsText.textContent=`Aw, you lost the game!!`;
             
 
        }else{
            finalResultsText.textContent=`The game is tied...`;
           
        }

        //finalScoresText.textContent= `Your Score: ${uScore} \nComputer's Score: ${cScore} \n`;

        finalResultsDiv.appendChild(finalResultsText);
        //finalResultsDiv.appendChild(finalScoresText);
        mainDiv.appendChild( finalResultsDiv);
 


    }

    function endGame(uScore, cScore, ){
        
        showGameResults(uScore, cScore);
        /*const sButtons= document.querySelectorAll(".selector-button");

       sButtons.forEach((button)=>{
            mainDiv.removeChild(button);
        });*/

        mainDiv.removeChild(selectorButtonsDiv);

       

        playAgain();    
        

    }

    function playAgain(){

        const playAgainDiv= document.createElement("div");
        
        const playAgainButton=document.createElement("button");
        playAgainButton.setAttribute("id", "play-again-button");
       
        playAgainButton.textContent= "play again";

        playAgainButton.addEventListener("click", ()=>window.location.reload());

       
        playAgainDiv.appendChild(playAgainButton);
        mainDiv.appendChild(playAgainDiv);
    }

    function startGame(){

        let userScore =0;
        let computerScore =0;

        userPlayDiv.appendChild(userPlayText);
        compPlayDiv.appendChild(compPlayText);

        playsDiv.appendChild(userPlayDiv);
        playsDiv.appendChild(compPlayDiv);
        roundDiv.appendChild(playsDiv);

        resultTextDiv.appendChild(resultText);
        roundDiv.appendChild(resultTextDiv);  

        playerScoreDiv.appendChild(playerScoreLabel);
        playerScoreDiv.appendChild(playerScoreText);
        compScoreDiv.appendChild(compScoreLabel);
        compScoreDiv.appendChild(compScoreText);

        roundScoreDiv.appendChild(playerScoreDiv);
        roundScoreDiv.appendChild(compScoreDiv);

        
        
        roundDiv.appendChild(roundScoreDiv);
        
        
       
        mainDiv.appendChild(roundDiv);

        mainDiv.appendChild(selectorButtonsDiv);

        

        
       

        selectorBtn.forEach((button)=>{
            const userPlay= button.dataset.play;

            button.addEventListener("click", ()=>{
               

                roundResults= playAgainstComputer(userPlay);
                //when the buttons are clicked, a round will be played with their respective play 
                //against the computer's. Whoever wins the round gets a point

                userPlayText.textContent=roundResults[0];
                compPlayText.textContent=roundResults[1];

                 if(roundResults[2]==="user"){  //the string stored in this array at index 2 tells the winner
                    ++userScore;                 //of the round  (see lines 175, 181)

                }else if(roundResults[2]==="comp"){  
                    ++computerScore;                
                                                    
                }

                showScores(userScore, computerScore) ;

                if (userScore===5 || computerScore===5){
                    endGame(userScore, computerScore);

                }

            

            });
        });
    }




    startGame();
