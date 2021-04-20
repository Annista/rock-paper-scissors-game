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
                console.log("You Win, Rock beats Scissors"); //Tells the user who won the round
                return "user";  //These return statements identify the winner in each round      
                
            }else if(computerSelection==='PAPER'){           
                    console.log("You Lose, Paper beats Rock");
                    return "comp";  
                    
                  }else if(computerSelection==='ROCK'){   
                            console.log("It's a tie");     
                            return "none";                 
                        }

        
        case 'PAPER':                        
            if(computerSelection==='ROCK'){            
                 console.log("You Win, Paper beats Rock");    
                 return "user";
                 
            }else if(computerSelection==='SCISSORS'){        
                    console.log("You Lose, Scissors beats Paper"); 
                    return "comp";

                }else if(computerSelection==='PAPER'){    
                            console.log("It's a tie");         
                            return "none";
                        }

        
        case 'SCISSORS':            
            if(computerSelection==='PAPER'){             
                console.log("You Win, Scissors beats Paper");  
                return "user";

            }else if(computerSelection==='ROCK'){            
                    console.log("You Lose, Rock beats Scissors"); 
                    return "comp";

                }else if(computerSelection==='SCISSORS'){   
                        console.log("It's a tie");                 
                        return "none";

                    }



        default:                                              
            console.log("Invalid word entered by user. Try again"); 
                                                              

    }

      
}
 
    

    function game(){
        let userScore=0; 

        let computerScore=0; 

        let rounds=0;  //Variable that stores how many rounds has been played
                      

        let keepPlaying= true; //This variable tells the program whether or not the user can keep playing

        let playerSelection; 

        let computerSelection; 

        let roundWinner; //This variable stores the winner of each round


        while(keepPlaying){//the iteration keeps going as long as kepPlaying is true

            ++rounds; 

            playerSelection=prompt("Enter your play (either rock, paper, or scissors)");
            

            computerSelection=computerPlay(); //function is called to get the computers play (see lines 1-26)
           

            roundWinner=playRound(playerSelection, computerSelection);
            //function playRound() returns a string that says the winner of the round
            //which is why the function call is assigned to 'roundWWinner'
            


            
            if(roundWinner==="user"){  
                ++userScore;                 

            }else if(roundWinner==="comp"){  
                    ++computerScore;                
                                                    
            }

           
            

            
            if(rounds===5){
                keepPlaying=false; 
                //after 5 rounds we should stop playing, so the value 'false' is assigned to 
                //keepPlaying, and when this happens, we break out of the while loop
                               
            }
            
            
       }

       console.log("That's been five rounds...");
    
       
       showGameResults(userScore, computerScore);
       

    }


    function showScores(uScore, cScore){
         
        console.log(`Your Score: ${uScore} \nComputer's Score: ${cScore} \n`);
       
    }

    function showGameResults(uScore, cScore){  
        
        if (uScore > cScore){
            console.log(`Yay, you won the game!!`);
            
            
  
        }else if(uScore < cScore){
            console.log(`Aw, you lost the game!!`);
             
 
        }else{
            console.log(`The game is tied...`);
           
        }

        showScores(uScore, cScore);
 


    }

    console.log(game());