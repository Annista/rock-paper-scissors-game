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
                return "You Win, Rock beats Scissors";    //statement, "You win, Rock beats Scissors"
                
            }else if(computerSelection==='PAPER'){          //Else, If computerSelection is 'PAPER', return the 
                    return "You Lose, Paper beats Rock";     //statement, "You lose, Paper beats Rock"
                    
                  }else if(computerSelection==='ROCK'){   //Else, If playerSelectionUpperis equal to
                            return "It's a tie";            //computerSelection, return the statement
                                                            //"It's a tie"
                        }

        
        case 'PAPER':                        //If playerSelectionUpper is 'PAPER', then test for the following:
            if(computerSelection==='ROCK'){            //If computerSelction is equal to 'ROCK', return the 
                 return "You Win, Paper beats Rock";    //statement "You win, Paper beats Rock" 
                 
            }else if(computerSelection==='SCISSORS'){        //Else, If computerSelection is equal to 'SCISSORS', 
                    return "You Lose, Scissors beats Paper"; //return the statement "You Lose, Scissors beats Paper" 
                    
                }else if(computerSelection==='PAPER'){    //Else, If playerSelectionUpper is equal to 'PAPER', return
                            return "It's a tie";         //the statement "It's a tie"
                        }

        
        case 'SCISSORS':            //If playerSelectionUpper is "SCISSORS", then test for the following:
            if(computerSelection==='PAPER'){             //If computerSelction is equal to 'PAPER', return the 
                return "You Win, Scissors beats Paper";  //statement "You win, Scissors beats Paper" 
                
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
 
    /*const  playerSelection= "scissors";
    const computerSelection= computerPlay(); 
    console.log(playRound(playerSelection, computerSelection));*/

    function game(){
        let userScore=0; //Create a variable called userScore and assign 0 to it

        let computerScore=0; //Create a variable called computerScore and assign 0 to it

        let rounds=0;  //Create a variable called rounds (that stores how many rounds has been played) 
                       //and assign 0 to it

        let keepPlaying= true; //Create a variable called keepPlaying (that tells the program whether or 
                               //not the user can keep playing) and assign true to it

        let playerSelection; //Create a variable called playerSelection

        let computerSelection; //Create a variable called computerSelection

        let roundResult; //Create a variable called roundResult (that stores the result of each round)



        while(keepPlaying){

            ++rounds; //Increment rounds by one

            playerSelection=prompt("Enter you play (either rock, paper, or scissors)");
            //prompt the user to enter either rock, paper, or scissors and assign their response 
            //to playerSelection

            computerSelection=computerPlay();
            //Get the computer's play by assigning a computerPlay() function call to computerSelection

            roundResult=playRound(playerSelection, computerSelection);
            //Assign to roundResult a playRound() function call


            //Evaluate roundResult to see who won the single round
            if(roundResult.includes("Win")){  //If the string stored in roundResult includes the word "Win"
                ++userScore;                 //that means that the user won so, increment userScore by one

            }else if(roundResult.includes("Lose")){  //If the string stored in roundResult includes the word 
                    ++computerScore;                //"Lose", that means that the computer won so, increment 
                                                    //the computerScore by one
            }

            console.log(`${roundResult} \nYour Score: ${userScore} \nComputer's Score: ${computerScore} \n`);
            //Display the result of each round, along with each score so far

            //Find out if five rounds of rock paper scissors has been played so far
            if(rounds===5){
                keepPlaying=false;//If rounds is equal to 5, ten assign false to keepPlaying (to tell the the 
                                //program that the user should stop playing)
            }
            
            
       }

       console.log("That's been five rounds...\n");
    
       //At the end of 5 rounds of rock paper scissors, we need declare the winner of the overall game. To do
       //that, we will compare both scores (userScore and computerScore) to each other

       if (userScore > computerScore){
           console.log("Yay, you won the game!!");
           //If userScore is greater than computerScore, display the message "Yay, you won the game!!"

       }else if(userScore < computerScore){
           console.log("Aw, you lost the game!!");
            //Else, if userScore is less than computerScore, display the message "Aw, you lost the game!!"

       }else{
           console.log("The game is tied...");
           //Else, if its none of the cases above, than that means only that both scores are equal. If so, 
           //display the message "The game is tied..."
       }


    }

    console.log(game());