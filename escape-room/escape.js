const readline = require("readline-sync");
var userName = readline.question('Welcome to the Escape Room!! What is your name? ');
console.log('Welcome ' + userName + '!');

var choice = readline.question('You are trapped! There are options to escape... What would you like to do? Press ENTER for options! ');

    function playerDeath(){
        console.log("You're dead!! ")
    }

    function findKey(){
        console.log("Great! Open the door and escpae! ")
    }

    function openDoor(){
        console.log("You live to see another day! ")
    }

    functions = ['Put Hand in Hole', 'Find the Key', 'Open the Door'],
    index = readline.keyInSelect(functions);

        if(index === 0){
            playerDeath()
        }

        if(index === 1){ 
            findKey()
        }

        if(index === 2){     
            openDoor()
        }




