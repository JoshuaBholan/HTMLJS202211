//Array of words
var rps = [];
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    alert(rps[pChoice] + " " + rps[cChoice]) 

    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                //alert(`You Tied`)
                ctx.font = "40px Arial";
                ctx.fillstyle = "blue";
                ctx.strokeStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("You Tied!", canvas.width/2, 320);
                ctx.fillText("You Chose Rock!", canvas.width/2, 280);
                ctx.strokeText("You Tied!", canvas.width/2, 320);
            }
            else if(cChoice === 1)
            {
                //display a loss
                //alert(`You Lost`)
                ctx.font = "40px Arial";
                ctx.fillstyle = "blue";
                ctx.strokeStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("You lost!", canvas.width/2, 320);
                ctx.fillText("You Chose Rock!", canvas.width/2, 280);
                ctx.strokeText("You lost!", canvas.width/2, 320);
                
            }
            else
            {
                //display a win
                //alert(`You Won`)
                ctx.font = "40px Arial";
                ctx.fillstyle = "blue";
                ctx.strokeStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("You Won!", canvas.width/2, 320);
                ctx.fillText("You Chose Rock!", canvas.width/2, 280);
                ctx.strokeText("You Won!", canvas.width/2, 320);
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    //alert(`You Win`)
                ctx.font = "40px Arial";
                ctx.fillstyle = "blue";
                ctx.strokeStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("You Win!", canvas.width/2, 320);
                ctx.fillText("You Chose Paper!", canvas.width/2, 280);
                ctx.strokeText("You Win!", canvas.width/2, 320);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    //alert(`Tie`)
                ctx.font = "40px Arial";
                ctx.fillstyle = "blue";
                ctx.strokeStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("You Tied!", canvas.width/2, 320);
                ctx.fillText("You Chose paper!", canvas.width/2, 280);
                ctx.strokeText("You Tied!", canvas.width/2, 320);
                }
                else
                {
                    //display a win
                    //alert(`You Lost`)
                ctx.font = "40px Arial";
                ctx.fillstyle = "blue";
                ctx.strokeStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("You lost!", canvas.width/2, 320);
                ctx.fillText("You Chose paper!", canvas.width/2, 280);
                ctx.strokeText("You lost!", canvas.width/2, 320);
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    //alert(`You Lost`)
                    ctx.font = "40px Arial";
                ctx.fillstyle = "blue";
                ctx.strokeStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("You lost!", canvas.width/2, 320);
                ctx.fillText("You Chose Scissors!", canvas.width/2, 280);
                ctx.strokeText("You lost!", canvas.width/2, 320);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    //alert(`You Win`)
                    ctx.font = "40px Arial";
                ctx.fillstyle = "blue";
                ctx.strokeStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("You win!", canvas.width/2, 320);
                ctx.fillText("You Chose scissors!", canvas.width/2, 280);
                ctx.strokeText("You win!", canvas.width/2, 320);
                }
                else
                {
                    //display a win
                    //alert(`You Tie`)
                    ctx.font = "40px Arial";
                ctx.fillstyle = "blue";
                ctx.strokeStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("You tie!", canvas.width/2, 320);
                ctx.fillText("You Chose scissors!", canvas.width/2, 280);
                ctx.strokeText("You tie!", canvas.width/2, 320);
                }
             break;
    }
}
