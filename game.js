'use strict'
let gamePattern = [];

let buttonColours = ["red", "blue", "yellow", "green"];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour =  buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}
