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
   let playerSelectionUpper= playSelection.toUpperCase(); //Create the variable playerSelectionUpper
        //Assign to playerSelectionUpper the playerSelection parameter converted to UpperCase   
        
    switch(playerSelectionUpper){ //Evaluate the variable playerSelectionUpper

        case 'ROCK':                        
            if(computerSelection==='SCISSORS'){ 
                console.log("You Win, Rock beats Scissors"); 
                return "user";        
                
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
            return "Invalid word entered by user. Try again"; 
                                                              

    }

      
}
 
    

    function game(){
        let userScore=0; //Create a variable called userScore and assign 0 to it

        let computerScore=0; //Create a variable called computerScore and assign 0 to it

        let rounds=0;  //Create a variable called rounds (that stores how many rounds has been played) 
                       //and assign 0 to it

        let keepPlaying= true; //Create a variable called keepPlaying (that tells the program whether or 
                               //not the user can keep playing) and assign true to it

        let playerSelection; //Create a variable called playerSelection

        let computerSelection; //Create a variable called computerSelection

        let roundWinner; //Create a variable called roundWinner (that stores the winner of each round)



        while(keepPlaying){

            ++rounds; 

            playerSelection=prompt("Enter your play (either rock, paper, or scissors)");
            

            computerSelection=computerPlay();
           

            roundWinner=playRound(playerSelection, computerSelection);
            


            
            if(roundWinner==="user"){  
                ++userScore;                 

            }else if(roundWinner==="comp"){  
                    ++computerScore;                
                                                    
            }

           
            

            
            if(rounds===5){
                keepPlaying=false; 
                               
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