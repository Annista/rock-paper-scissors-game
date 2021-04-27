
const mainDiv= document.querySelector("#main-div");
const rockBtn= document.createElement("button");
const paperBtn= document.createElement("button");
const scissorsBtn= document.createElement("button"); //Creating three buttons, one for each selection

rockBtn.textContent="ROCK";
paperBtn.textContent="PAPER";
scissorsBtn.textContent="SCISSORS";

rockBtn.setAttribute("data-play", "ROCK");
paperBtn.setAttribute("data-play", "PAPER");
scissorsBtn.setAttribute("data-play", "SCISSORS"); //Add a data attribute to each button called data-play

const resultDiv= document.createElement("div");  //Creating a div to display the round results on the webpage

const scoreDiv= document.createElement("div");  //Creating a div to display the running score on the webpage

const selectorBtn= [rockBtn, paperBtn, scissorsBtn];
    



selectorBtn.forEach((button)=> { //All three button will be styled, share a class, and added to the mainDiv
    button.style.margin= '10px';
    button.classList.add("selector-button");

    mainDiv.appendChild(button);

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
                resultDiv.textContent= "You Win, Rock beats Scissors"; //Tells the user who won the round
                return "user";  //These return statements identify the winner in each round      
                
            }else if(computerSelection==='PAPER'){           
                resultDiv.textContent= "You Lose, Paper beats Rock";
                    return "comp";  
                    
                  }else if(computerSelection==='ROCK'){   
                    resultDiv.textContent= "It's a tie";     
                            return "none";                 
                        }

        
        case 'PAPER':                        
            if(computerSelection==='ROCK'){            
                resultDiv.textContent= "You Win, Paper beats Rock";    
                 return "user";
                 
            }else if(computerSelection==='SCISSORS'){        
                resultDiv.textContent= "You Lose, Scissors beats Paper"; 
                    return "comp";

                }else if(computerSelection==='PAPER'){    
                    resultDiv.textContent= "It's a tie";         
                            return "none";
                        }

        
        case 'SCISSORS':            
            if(computerSelection==='PAPER'){             
                resultDiv.textContent= "You Win, Scissors beats Paper";  
                return "user";

            }else if(computerSelection==='ROCK'){            
                resultDiv.textContent= "You Lose, Rock beats Scissors"; 
                    return "comp";

                }else if(computerSelection==='SCISSORS'){   
                    resultDiv.textContent= "It's a tie";                 
                        return "none";

                    }



        default:                                              
            console.log("Invalid word entered by user. Try again"); 
                                                              

    }

      
}
 
    

    function game(play){
       
            
        
                const playerSelection= play;
                const computerSelection=computerPlay(); //function is called to get the computers play (see lines 1-26)

                const rWinner= playRound(playerSelection, computerSelection);
                //function playRound() returns a string that says the winner of the round
                //which is why the function call is assigned to 'roundWWinner'

                return rWinner;

                

                

                

          
            //when the buttons are clicked, a round will be played with their respective play 
            //against the computer's. Whoever wins the round gets a point

            


           
            

            
           

           
         

            
            /*if(rounds===5){
                keepPlaying=false; 
                //after 5 rounds we should stop playing, so the value 'false' is assigned to 
                //keepPlaying, and when this happens, we break out of the while loop
                               
            }*/
            
            
       //}

       //console.log("That's been five rounds...");
    
       
       //showGameResults(userScore, computerScore);
       

    }


    function showScores(uScore, cScore){ //Displays the scores of each player in the console
         
        scoreDiv.textContent= `Your Score: ${uScore} \nComputer's Score: ${cScore} \n`;
       
    }

    function showGameResults(uScore, cScore){ //Displays the overall result of the game
        const finalResultsDiv= document.createElement("div");
        const finalScoresDiv= document.createElement("div");
        
        if (uScore > cScore){
            finalResultsDiv.textContent=`Yay, you won the game!!`;
            
            
  
        }else if(uScore < cScore){
            finalResultsDiv.textContent=`Aw, you lost the game!!`;
             
 
        }else{
            finalResultsDiv.textContent=`The game is tied...`;
           
        }

        finalScoresDiv.textContent= `Your Score: ${uScore} \nComputer's Score: ${cScore} \n`;

        mainDiv.appendChild(finalResultsDiv);
        mainDiv.appendChild(finalScoresDiv);
 


    }

    function endGame(uScore, cScore, ){
        console.log("That's been five rounds...");
        showGameResults(uScore, cScore);
        const sButtons= document.querySelectorAll(".selector-button");

       sButtons.forEach((button)=>{
            mainDiv.removeChild(button);
        });

        //console.log(checkForButtons());

        playAgain();

        
        
        

    }

    function playAgain(){

        const playAgainDiv= document.createElement("div");
        
        const playAgainButton=document.createElement("button");
       
        playAgainButton.textContent= "play again";

        playAgainButton.addEventListener("click", ()=>window.location.reload());

       
        playAgainDiv.appendChild(playAgainButton);
        mainDiv.appendChild(playAgainDiv);
    }

    function startGame(){

        let userScore =0;
        let computerScore =0;
        
        

        selectorBtn.forEach((button)=>{
            const userPlay= button.dataset.play;
            button.addEventListener("click", ()=>{
            

                roundWinner= game(userPlay);

                 if(roundWinner==="user"){  
                    ++userScore;                 

                }else if(roundWinner==="comp"){  
                    ++computerScore;                
                                                    
                }

                showScores(userScore, computerScore) ;

                if (userScore===5 || computerScore===5){
                    endGame(userScore, computerScore);

                }

            

            });
        });
    }




    mainDiv.appendChild(resultDiv);
    mainDiv.appendChild(scoreDiv);



    startGame();
