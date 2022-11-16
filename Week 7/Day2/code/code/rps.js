//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var rock = new Image();
var paper = new Image();
var scissors = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissors = new Image();

rock.src = "images/rock.jpg"
paper.src = "images/paper.jpg"
scissors.src = "images/scissors.jpg"

hrock.src = "images/rock2.jpg"
hpaper.src = "images/paper2.jpg"
hscissors.src = "images/scissors2.jpg"

hscissors.onload = function(){
    draw(rock,paper,scissors,rock,paper,scissors);
}


document.addEventListener("keydown",onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var results = "select Rock, Paper or Scissors above"

function onKeyDown(e){
    console.log(e.keyCode);
}

function onKeyUp(e){
    if(e.keyCode == 32){
        console.log("you pressed the spacebar")
        gameOver = false;
        draw(rock,paper,scissors,rock,paper,scissors);
    }
}

function draw(rock, paper, scissors, crock, cpaper, cscissors){
    if(gameOver == true){
   //drawing the fonts
ctx.font = "40px Arial";
ctx.fillstyle = "blue";
ctx.strokeStyle = "green";
ctx.textAlign = "center"
ctx.fillText("Welcome to the RPS Game!", canvas.width/2, 280);
ctx.fillText("Press Space to Start!", canvas.width/2, 320);
ctx.strokeText("Welcome to the RPS Game!", canvas.width/2, 280);
    }
    else{
        ctx.save();
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.font = "30px Arial"
        ctx.textAllign = "center"
        ctx.fillStyle = "pink";
        ctx.fillText("Player Choice", canvas.width/2, 100);
        ctx.drawImage(rock, canvas.width/2 - rock.width/2 - 100, 150);
        ctx.drawImage(paper, canvas.width/2 - paper.width/2 , 150);
        ctx.drawImage(scissors, canvas.width/2 - scissors.width/2 + 100, 150);
        //computer choice
        ctx.fillText("Computer Choice", canvas.width/2, 325);
        ctx.drawImage(crock, canvas.width/2 - crock.width/2 - 100, 375);
        ctx.drawImage(cpaper, canvas.width/2 - cpaper.width/2 , 375);
        ctx.drawImage(cscissors, canvas.width/2 - cscissors.width/2+ 100, 375);

        ctx.fillText(Results, canvas.width/2, 525);
        ctx.restore();
    }
}



//alert("Select rock, paper, or scissors!");
var rps = ["rock", "paper","scissors"];
//console.log(rps[2]);
document.getElementById("rock").addEventListener('click',function(e){alert("you picked " +rps[0]); playGame(rps[0]);
});
document.getElementById("paper").addEventListener('click',function(e){alert("you picked "+rps[1]); playGame(rps[1]);
});
document.getElementById("scissors").addEventListener('click',function(e){alert("you picked "+rps[2]); playGame(rps[2]);
});
function playGame(playerChoice){
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch(playerChoice){
        if(gameOver = true){
            return;
        } else{
            var cpuChoice = Math.floor(Math.random() * 2.99);
            console.log(cpuChoice, playerChoice);

            switch(playerChoice){
                case "rock":
            if(cpuChoice == 0){
                //rock
                //alert("CPU chose Rock. Its a tie!");
                results = "CPU chose Rock. It's a tie!"
                draw(rock,paper,scissors,rock,paper,scissors);
            }
            else if(cpuChoice == 1){
                //paper
                //alert("CPU chose Paper. You lost horribly! :(");
                results = "CPU chose Paper. You Lost!"
                draw(rock,paper,scissors,rock,paper,scissors);
            }
            else{
                //alert("CPU chose Scissors. You win! :)");
                results = "CPU chose Scissors. You Win!"
                draw(rock,paper,scissors,rock,paper,scissors);
            }
            break;

            case "paper":
                if(cpuChoice == 0){
                    //rock
                    //alert("CPU chose Rock. You Win! :)");
                    results = "CPU chose Rock. You win"
                    draw(rock,paper,scissors,rock,paper,scissors);
                }
                else if(cpuChoice == 1){
                    //paper
                    //alert("CPU chose Paper. Its a tie!");
                    results = "CPU chose paper It's a Tie!"
                    draw(rock,paper,scissors,rock,paper,scissors);
                }
                else{
                    //alert("CPU chose Scissors. You lost horribly! :(");
                    results = "CPU chose Scissors. You Lose!"
                    draw(rock,paper,scissors,rock,paper,scissors);
                }

            break;
            case "scissors":
                if(cpuChoice == 0){
                    //rock
                    //alert("CPU chose Rock. You lost horribly! :(");
                    results = "CPU chose Rock. You Lost!"
                    draw(rock,paper,scissors,rock,paper,scissors);
                }
                else if(cpuChoice == 1){
                    //paper
                    //alert("CPU chose Paper. You Win! :)");
                    results = "CPU chose Paper You Win!"
                    draw(rock,paper,scissors,rock,paper,scissors);
                }
                else{
                    //alert("CPU chose Scissors. Its a tie!");
                    results = "CPU chose Scissors its's a tie!"
                    draw(rock,paper,scissors,rock,paper,scissors);
                }

            break;
    }
}
}