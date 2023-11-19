'use strict'
let gamePattern = [];

let userClickedPattern = [];

let buttonColours = ["red", "blue", "yellow", "green"];

let level = 0;

let started = false;

//Faz com que seja possível começar o jogo após apertar uma letra qualquer
//Isso só pode ocorrer uma vez, que é antes do jogo começar, caso aperte uma letra durante o jogo nada irá acontecer
$(document).on("keydown", function(){
    if(!started){
        $("#level-title").text("Level 0");
        nextSequence()
        started = true;
    }
})

//Adiciona funcionalidades ao botão que são executadas a partir de um click
$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1);
})

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

//Função para reproduzir aúdios
function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
     audio.play();
}

//Função para animar o botão que foi pressionado
function animatePress(currentColour){
    $(".btn" + "." + currentColour).addClass("pressed");
     setTimeout( ()=>{
        $(".btn" + "." + currentColour).removeClass("pressed")}
     , 100);

}

//Serve para checkar se a resposta do usuário é compativel com a sequencia criada aleatoriamente pelo computador
function checkAnswer(currentLevel){
    //Se o ultimo elemento do array do que foi clicado pelo usuário for igual ao ultimo elemento da sequencia criada pelo computador, então está correto
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");
        //Além disso, os tamanhos dos arrays do usuario e do computador devem possuir o mesmo tamanho
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                //Adiciona um delay de 1000 ms antes chamar a função nextSequence
                nextSequence();
            }, 1000);
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout( ()=>{
            $("body").removeClass("game-over")}
            , 100);
        $("#level-title").text("Você perdeu, aperte qualquer tecla para reiniciar");
        startOver();
    }

}


function startOver(){
    started = false;
    gamePattern = [];
    level = 0;
}