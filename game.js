'use strict'
let gamePattern = [];

let userClickedPattern = [];

let buttonColours = ["red", "blue", "yellow", "green"];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // audio.play();


    $("#btn").on("click", function(){
        let userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern)
    })
}

nextSequence();