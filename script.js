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

//console.log(computerPlay());

function playRound(playSelection, computerSelection){
   let playerSelectionUpper= playSelection.toUpperCase(); //Create the variable playerSelectionUpper
        //Assign to playerSelectionUpper the playerSelection parameter converted to UpperCase   
        
    switch(playerSelectionUpper){ //Evaluate the variable playerSelectionUpper

        case 'ROCK':                        //If playerSelectionUpper is 'ROCK', then test for the following:
            if(computerSelection==='SCISSORS'){           //If computerSelection is 'SCISSORS', return the 
                return "You win, Rock beats Scissors";    //statement, "You win, Rock beats Scissors"
                
            }else if(computerSelection==='PAPER'){          //Else, If computerSelection is 'PAPER', return the 
                    return "You Lose, Paper beats Rock";     //statement, "You lose, Paper beats Rock"
                    
                  }else if(computerSelection==='ROCK'){   //Else, If playerSelectionUpperis equal to
                            return "It's a tie";            //computerSelection, return the statement
                                                            //"It's a tie"
                        }

        
        case 'PAPER':                        //If playerSelectionUpper is 'PAPER', then test for the following:
            if(computerSelection==='ROCK'){            //If computerSelction is equal to 'ROCK', return the 
                 return "You win, Paper beats Rock";    //statement "You win, Paper beats Rock" 
                 
            }else if(computerSelection==='SCISSORS'){        //Else, If computerSelection is equal to 'SCISSORS', 
                    return "You Lose, Scissors beats Paper"; //return the statement "You Lose, Scissors beats Paper" 
                    
                }else if(computerSelection==='PAPER'){    //Else, If playerSelectionUpper is equal to 'PAPER', return
                            return "It's a tie";         //the statement "It's a tie"
                        }

        
        case 'SCISSORS':            //If playerSelectionUpper is "SCISSORS", then test for the following:
            if(computerSelection==='PAPER'){             //If computerSelction is equal to 'PAPER', return the 
                return "You win, Scissors beats Paper";  //statement "You win, Scissors beats Paper" 
                
            }else if(computerSelection==='ROCK'){           //Else, If computerSelection is equal to 'ROCK', 
                    return "You Lose, Rock beats Scissors"; //return the statement "You Lose, Rock beats Scissors" 
                   
                }else if(computerSelection==='SCISSORS'){   //Else, If playerSelectionUpper is equal to 'SCISSORS', return
                        return "It's a tie";                //the statement "It's a tie"    
                    }



        default:                                              //If playerSelectionUpper matches none of the cases 
            return "Invalid word entered by user. Try again"; //above, return the statement "Invalid word
                                                              //entered by user. Try again."

    }

       /*return `User Play: ${playerSelectionUpper}, Computer Play: ${computerSelection}`;*/
}
 
    const playerSelection= "scissors";
    const computerSelection= computerPlay(); 
    console.log(playRound(playerSelection, computerSelection));