
const mainDiv= document.querySelector("#main-div");

const selectorButtonsDiv= document.createElement("div");
selectorButtonsDiv.setAttribute("id", "selector-buttons-div");

const rockBtn= document.createElement("div");
const paperBtn= document.createElement("div");
const scissorsBtn= document.createElement("div"); //Creating three buttons, one for each selection


const rockImg= document.createElement("img");
/*rockImg.setAttribute("src", "https://image.flaticon.com/icons/png/512/2229/2229987.png");*/
rockImg.setAttribute("src", "./hand-rock.png");
rockImg.classList.add("selector-img");
rockBtn.appendChild(rockImg);

//rockBtn.textContent="ROCK";

const paperImg= document.createElement("img");
/*paperImg.setAttribute("src", "https://image.flaticon.com/icons/png/512/650/650640.png");*/
paperImg.setAttribute("src", "./hand-paper.png");
paperImg.classList.add("selector-img");
paperBtn.appendChild(paperImg);

//paperBtn.textContent="PAPER";

const scissorsImg= document.createElement("img");
/*scissorsImg.setAttribute("src", "https://image.flaticon.com/icons/png/512/732/732457.png");*/
scissorsImg.setAttribute("src", "./hand-scissors.png");
scissorsImg.classList.add("selector-img");
scissorsBtn.appendChild(scissorsImg);

//scissorsBtn.textContent="SCISSORS";

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
const userPlayImg= document.createElement("img");
//userPlayText.setAttribute("id", "user-play-text");
userPlayImg.classList.add("play-img");
const compPlayDiv= document.createElement("div");
compPlayDiv.setAttribute("id", "comp-play-div");
const compPlayImg= document.createElement("img");
compPlayImg.classList.add("play-img");

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

const verticalLine=document.createElement('div');
verticalLine.classList.add('vertical-line');
const userHorizLine=document.createElement('div');
userHorizLine.classList.add('horiz-line');
const compHorizLine=document.createElement('div');
compHorizLine.classList.add('horiz-line');
 
const playerScoreLabel= document.createElement("p"); //These p elements are for displaying the scores at a given
const compScoreLabel= document.createElement("p");  //time
playerScoreLabel.textContent= "Your Score";
compScoreLabel.textContent= "Computer's Score";
const compScoreText= document.createElement("p");
const playerScoreText= document.createElement("p");


/*playerScoreDiv.classList.add("");
compScoreDiv.classList.add("");*/




    



selectorBtn.forEach((button)=> { //All three button will be styled, share a class, and added to the 
    button.style.margin= '10px'; //selectorButtonsDiv
    button.classList.add("selector-button");
    button.classList.add("button-div");
    selectorButtonsDiv.appendChild(button);

    
    });

    let resultString;

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
                resultString= "You Win, Rock beats Scissors"; //Tells the user who won the round
                return "user";  //These return statements identify the winner in each round      
                
            }else if(computerSelection==='PAPER'){           
                resultString= "You Lose, Paper beats Rock";
                    return "comp";  
                    
                  }else if(computerSelection==='ROCK'){   
                    resultString= "It's a tie";     
                            return "none";                 
                        }

        
        case 'PAPER':                        
            if(computerSelection==='ROCK'){            
                resultString= "You Win, Paper beats Rock";    
                 return "user";
                 
            }else if(computerSelection==='SCISSORS'){        
                resultString= "You Lose, Scissors beats Paper"; 
                    return "comp";

                }else if(computerSelection==='PAPER'){    
                    resultString= "It's a tie";         
                            return "none";
                        }

        
        case 'SCISSORS':            
            if(computerSelection==='PAPER'){             
                resultString= "You Win, Scissors beats Paper";  
                return "user";

            }else if(computerSelection==='ROCK'){            
                resultString= "You Lose, Rock beats Scissors"; 
                    return "comp";

                }else if(computerSelection==='SCISSORS'){   
                    resultString= "It's a tie";                 
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

    function endGame(uScore, cScore){
        
        showGameResults(uScore, cScore);

        playAgain();    
        

    }

    function playAgain(){

        const playAgainDiv= document.createElement("div");
        
        const playAgainButton=document.createElement("div");
        playAgainButton.setAttribute("id", "play-again-button");
        playAgainButton.classList.add("button-div");

        const playAgainImg= document.createElement("img");
        playAgainImg.setAttribute("src", "pngaaa.com-1451153.png");
        playAgainImg.setAttribute("id", "play-again-img");
        playAgainDiv.classList.add("play-again-div");
        //playAgainButton.textContent= "play again";
        playAgainButton.appendChild(playAgainImg);

        playAgainButton.addEventListener("click", ()=>window.location.reload());

       
        playAgainDiv.appendChild(playAgainButton);
        mainDiv.appendChild(playAgainDiv);
    }

    function fadeIn(element){  //gives 'element' the animation effect of fading into the webpage
        element.style.opacity=0;
        let fadeStart= Date.now();

        let timer= setInterval(()=>{
            let timePassed= Date.now()-fadeStart;

            element.style.opacity= timePassed/ 2000;

            if (timePassed >= 2000){
                clearInterval(timer);
            }
        }, 40);
    }

    function selectPlayImage(imageElement, play){

        if (play=="ROCK"){
            imageElement.src=rockImg.src;
        }else if(play=="PAPER"){
            imageElement.src=paperImg.src;
        }else if(play=="SCISSORS"){
            imageElement.src=scissorsImg.src;
        }
    }

    function startGame(){

        let userScore =0;
        let computerScore =0;

        userPlayDiv.appendChild(userPlayImg);
        compPlayDiv.appendChild(compPlayImg);

        playsDiv.appendChild(userPlayDiv);
        playsDiv.appendChild(compPlayDiv);
       

        resultTextDiv.appendChild(resultText);
      

        playerScoreText.textContent="0";
        compScoreText.textContent="0";
        playerScoreLabel.style.marginRight= '10px';
        
        compScoreLabel.style.marginLeft='10px'; 
        

        playerScoreDiv.appendChild(playerScoreLabel);
        playerScoreDiv.appendChild(userHorizLine);
        playerScoreDiv.appendChild(playerScoreText);
        compScoreDiv.appendChild(compScoreLabel);
        compScoreDiv.appendChild(compHorizLine);
        compScoreDiv.appendChild(compScoreText);

        roundScoreDiv.appendChild(playerScoreDiv);
        roundScoreDiv.appendChild(verticalLine);
        roundScoreDiv.appendChild(compScoreDiv);

        
        
        roundDiv.appendChild(roundScoreDiv);
        
        mainDiv.appendChild(selectorButtonsDiv); 
       
        mainDiv.appendChild(roundDiv);

       

        

        
       

        selectorBtn.forEach((button)=>{
            const userPlay= button.dataset.play;

            button.addEventListener("click", ()=>{
               
                mainDiv.removeChild(selectorButtonsDiv);
                roundDiv.insertBefore(playsDiv, roundScoreDiv);
                roundDiv.insertBefore(resultTextDiv, roundScoreDiv); 
                roundResults= playAgainstComputer(userPlay);
                //when the buttons are clicked, a round will be played with their respective play 
                //against the computer's. Whoever wins the round gets a point

                //userPlayImg.textContent=roundResults[0];
                selectPlayImage(userPlayImg, roundResults[0]);
                fadeIn(userPlayImg); //gives userPlayText the effect of fading into display

              

                setTimeout(()=>{
                    //compPlayImg.textContent=roundResults[1];
                    selectPlayImage(compPlayImg, roundResults[1]);
                    fadeIn(compPlayImg);
                }, 2000); //2s delay. compPlayText wont start fading into display until 2s after the code 
                          //above it is executed
                setTimeout(()=>{
                   resultText.textContent=resultString;
                   fadeIn(resultText);
                }, 4000);


                
               

                 if(roundResults[2]==="user"){  //the string stored in this array at index 2 tells the winner
                    ++userScore;                 //of the round  (see lines 175, 181)

                }else if(roundResults[2]==="comp"){  
                    ++computerScore;                
                                                    
                }

                setTimeout(()=>{
                    showScores(userScore, computerScore) ;
                }, 5000);
                

                
                setTimeout(()=>{
                    userPlayImg.src=""; 
                }, 7000);

               
                setTimeout(()=>{
                    compPlayImg.src="";
                }, 7000);
                
                
                setTimeout(()=>{
                    resultText.textContent="";
                }, 7000);

              

               

                setTimeout(()=>{
                    roundDiv.removeChild(playsDiv); //removes the divs showing the plays of each player 
                    roundDiv.removeChild(resultTextDiv); //and the round result string 
                    if (userScore===5 || computerScore===5){
                        
                        endGame(userScore, computerScore);
    
                    }else{
                        mainDiv.insertBefore(selectorButtonsDiv, roundDiv); 
                    }
                }, 7000);
                

            

            });
        });
    }




    startGame();
