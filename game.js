'use strict'
let gamePattern = [];

let userClickedPattern = [];

let buttonColours = ["red", "blue", "yellow", "green"];


//estava usando uma id ao invés de uma classe por isso nao estava funcionando
$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour)
})

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
}

function animatePress(currentColour){

    $(".btn" + "." + currentColour).addClass("pressed");
     setTimeout( ()=>{
        $(".btn" + "." + currentColour).removeClass("pressed")}
     , 100);

}

