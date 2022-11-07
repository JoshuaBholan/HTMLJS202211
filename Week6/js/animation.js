var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);
var x = 100;
var speedX = 5;

var mario = new Image();
mario.src = "images/mario.png";
mario.onload = function(){
    main();
}

var bg = new Image();
bg.src = "images/mariosupershow.jpg";
bg.onload = function(){
    main();
}

function main(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
    //ctx.fillStyle = "red";
    //ctx.beginPath();
    //ctx.arc(x,300, 10, 0, 2*Math.PI, true);
    //ctx.fill();

    //draw sprite image
    ctx.drawImage(mario,x,300, 100, 110);
    x += speedX;
    if(x > canvas.width - 100 || x < 0){
        speedX *= -1;
    }
    console.log(speedX)
    timer = requestAnimationFrame(main);
}


