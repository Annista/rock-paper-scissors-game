function computerPlay(){

    let play="";  //Create a variable called 'play' and assign an empy sting to it
    
    let choice; //Create a variable called 'choice'

    choice= Math.floor(Math.random()*3) + 1; //Assign choice a random number between 1 and 3

    switch(choice){ //Evaluate the number stored in choice
        case 1:
            play="ROCK"; //If choice is equal to 1, assign the string "ROCK" to play
            break;

        case 2:
            play="PAPER"; //If choice is equal to 2, assign the string "PAPER" to play
            break;
            
        case 3:
            play= "SCISSORS"; //If choice is equal to 3, assign the string "SCISSORS" to play
            break;

        default:
            console.log("Something went wrong!!"); //If choice is not between 1 and 3, output an error message

    }

    return play; //Return thhe value of play


}

console.log(computerPlay());