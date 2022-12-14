var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var gameOver = true;
var score = 0;
var highScore = 0;
var currentState = 0;
var gameState = [];

//asteroid varables
var numAsteroids = 20;
var asteroids = [];
var asteroidss = new Image();
asteroidss.src = "images/Asteroid.png";

//player ship varables
var ship = new PlayerShip();
shipsprite = new Image();
shipsprite.src = "images/Ship.png";

var mainmenu = new Image();
mainmenu.src = "images/Main_Menu.png";
mainmenu.onload = function(){
    main();
}

var spacegame = new Image();
spacegame.src = "images/spacegame.jpg";
spacegame.onload = function(){
    main();
}
var end = new Image();
end.src = "images/endd.jpg";
end.onload = function(){
    main();
}

//create keyboard event handlers
document.addEventListener("keydown",presskeyDown);
document.addEventListener("keyup",presskeyUp);


function presskeyDown(e){
    if(!gameOver){
        if(e.keyCode == 87){
            //code for up w
            ship.up = true;
    
        }
        if(e.keyCode == 65){
            //code for  left A
            ship.left = true;
            
        }
        if(e.keyCode == 68){
            //code for right D
            ship.right = true;
            
        }
        if(e.keyCode == 83){
            //code for down S
            ship.down = true;
            
        }
        //arrow keys
if(e.keyCode == 38){
    //code for up w

    ship.up = true;

}
if(e.keyCode == 37){
    //code for  left A

    ship.left = true;
    
}
if(e.keyCode == 39){
    //code for right D
    
    ship.right = true;
}
if(e.keyCode == 40){
    //code for down S

    ship.down = true;
    
}
}

    
    if(e.keyCode == 87){
        //code for up w
        ship.up = true;

    }
    if(e.keyCode == 65){
        //code for  left A
        ship.left = true;
        
    }
    if(e.keyCode == 68){
        //code for right D
        ship.right = true;
        
    }
    if(e.keyCode == 83){
        //code for down S
        ship.down = true;
        
    }
    //arrow keys
if(e.keyCode == 38){
    //code for up w

    ship.up = true;

}
if(e.keyCode == 37){
    //code for  left A

    ship.left = true;
    
}
if(e.keyCode == 39){
    //code for right D
    
    ship.right = true;
}
if(e.keyCode == 40){
    //code for down S

    ship.down = true;
    
}
//menu inputs use spacebar
if(gameOver){
    if(e.keyCode == 32){
        if(currentState == 2){
            currentState = 0;
            numAsteroids = 20;
            asteroids = [];
            score = 0;
            //start game here
            gameStart();
            main();
            //game overinputs
        }else{
            //main menu iputs
            currentState = 1;
        gameOver = false;
        main();
        scoreTimer();
        }
    }
}
}

function presskeyUp(e){
    if (!gameOver){
        if(e.keyCode == 87){
            //code for up w
    
            ship.up = false;
    
        }
        if(e.keyCode == 65){
            //code for  left A
    
            ship.left = false;
            
        }
        if(e.keyCode == 68){
            //code for right D
            
            ship.right = false;
        }
        if(e.keyCode == 83){
            //code for down S
    
            ship.down = false;
            
        }
           //arrow keys
    if(e.keyCode == 38){
        //code for up w
    
        ship.up = false;
    
    }
    if(e.keyCode == 37){
        //code for  left A
    
        ship.left = false;
        
    }
    if(e.keyCode == 39){
        //code for right D
        
        ship.right = false;
    }
    if(e.keyCode == 40){
        //code for down S
    
        ship.down = false;
        
    }
    }
    
    if(e.keyCode == 87){
        //code for up w

        ship.up = false;

    }
    if(e.keyCode == 65){
        //code for  left A

        ship.left = false;
        
    }
    if(e.keyCode == 68){
        //code for right D
        
        ship.right = false;
    }
    if(e.keyCode == 83){
        //code for down S

        ship.down = false;
        
    }
       //arrow keys
if(e.keyCode == 38){
    //code for up w

    ship.up = false;

}
if(e.keyCode == 37){
    //code for  left A

    ship.left = false;
    
}
if(e.keyCode == 39){
    //code for right D
    
    ship.right = false;
}
if(e.keyCode == 40){
    //code for down S

    ship.down = false;
    
}
}





//asteroid class
function Asteroid(){
    //properties to draw the asteroid
    this.radius = randomRange(15,2);
    this.x = randomRange(canvas.width - this.radius,this.radius)
    this.y = randomRange(canvas.height - this.radius,this.radius) - canvas.height;
    this.vy = randomRange(10,5);
    this.color = "brown";

    //methods (functions) to draw
    this.drawAsteroid = function(){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.y+200, this.x, this.radius,0, Math.PI *2, true)  ;
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        
    }

}

function PlayerShip(){
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.width = 20;
    this.height = 20;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.vx = 0;
    this.vy = 0;
    this.flameLength = 30;

    this.drawShip = function(){
        ctx.save();
        ctx.translate(this.x,this.y);

        //draw the thruster
        if(this.up || this.left || this.right){
            ctx.save();
            if(this.flameLength == 30){
                this.flameLength = 20;
                ctx.fillStyle = "yellow";
            }else{
                this.flameLength = 30;
                ctx.fillStyle = "orange";
            }
            //draw the flame
            ctx.beginPath();
            ctx.moveTo(0, this.flameLength);
            ctx.lineTo(5,5);
            ctx.lineTo(-5,5);
            ctx.lineTo(0,this.flameLength);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        //drawship
        ctx.fillStyle = "red";
        ctx.drawImage(shipsprite,0,0,this.width,this.height);
        ctx.restore();
    }
        

    this.moveShip = function(){
        this.x += this.vx;
        this.y += this.vy;

        //adding boundaries
        //bottom boundary
        if(this.y > canvas.height - this.height/2){
            this.y = canvas.height - this.height/2;
            this.vy = 0;
        }

        //top boundary
        if(this.y < this.height/2){
            this.y = this.height/2;
            this.vy = 0;
        }
        //right boundary 
        if(this.x > canvas.width - this.width/2){
            this.x = canvas.width - this.width/2;
            this.vx = 0;
    }
    //left
    if(this.x < this.width/2){
        this.x =  this.width/2;
        this.vx = 0;

}
    }
}
//for loop to instaniate astroide for game
function main(){
    //clear the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //draw score to screen

    gameState[currentState]();
    if(!gameOver){
        timer = requestAnimationFrame(main);
    }

}

//Game State Machine

//main Menu State
gameState[0] = function(){
    // code for main menu
    ctx.save();
    ctx.drawImage(mainmenu,0,0,canvas.width,canvas.height);
    ctx.restore();
}

// Play Game State
gameState[1] = function(){
    ctx.save();
    ctx.drawImage(spacegame,0,0,canvas.width,canvas.height);
    ctx.font = "15px comic sans";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score.toString(), canvas.width - 150,30)
    ctx.restore();

    //vertical movement

    if(ship.up){
        ship.vy = -10;
    }
    else if(ship.down){
        ship.vy = 10;
    }
    else{
        ship.vy = 0;
    }
    //horizontal movement
    if(ship.left){
        ship.vx = -5;
    }else if(ship.right){
        ship.vx = 5;
    }else{
        ship.vx = 0;
    }
    
    for(var i = 0; i<asteroids.length; i++){
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var distance = Math.sqrt((dX*dX) + (dY*dY));
            //collosion dection here
        if(detectCollision(distance,(ship.height/2 + asteroids[i].radius))){
            //console.log( "Hit Asteroid")
            //alert("hit asteroid");
            gameOver = true;
            currentState = 2;
            main();
            return;
        }

        if(asteroids[i].y> canvas.height + asteroids[i].radius){
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius,asteroids[i].radius) - canvas.height;
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius,asteroids[i].radius);
        }
        asteroids[i].y += asteroids[i].vy;
        asteroids [i].drawAsteroid();

    }

    //draw the ship
    ship.moveShip();
    ship.drawShip();

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
    }

}
    gameState[2] = function(){
        if(score > highScore){
            highScore = score;

        ctx.save();
        ctx.drawImage(end,0,0,canvas.width,canvas.height);
        ctx.font = '30px times new roman';
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("Game Over, Your Score was: " + score.toString(), canvas.width/2, canvas.height/2 - 60);
        ctx.fillText("your High Score is " + highScore.toString(), canvas.width/2, canvas.height/2 - 30)
        ctx.fillText("New Record! ", canvas.width/2, canvas.height/2)
        ctx.font = "15px Arial"
        ctx.fillText("Press Space to play again ", canvas.width/2, canvas.height/2 + 20);
        ctx.restore();
        }else{
            //code for game over
        ctx.save();
        ctx.drawImage(end,0,0,canvas.width,canvas.height);
        ctx.font = '30px Arial';
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Game Over, Your Score was: " + score.toString(), canvas.width/2, canvas.height/2 - 60);
        ctx.fillText("your High Score is " +highScore.toString(), canvas.width/2, canvas.height/2 - 30)
        ctx.font = "15px Arial"
        ctx.fillText("Press Space to play again ", canvas.width/2, canvas.height/2 + 20);
        ctx.restore();
        }
    }


//utility functions
function gameStart(){
    for(var i = 0; i<numAsteroids; i++){
        asteroids[i] = new Asteroid();
}

ship = new PlayerShip();
}
function randomRange(high, low){
    return Math.random()* (high-low) + low;
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}

function scoreTimer(){
    if(!gameOver){
        score++;

        if(score % 5 == 0){
            numAsteroids += 5;
            console.log(numAsteroids);
        }

        //calls score timer every second
        setTimeout(scoreTimer, 1000);
    }
}