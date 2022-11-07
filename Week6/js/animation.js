var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var timer = requestAnimationFrame(main);
var x = 100;

var mario = new Image();
mario.src = "images/mario.png";
mario.onload = function(){
    main();
}


function main(){
    ctx.clearRect(300,0,canvas.width,canvas.height);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x,300, 10, 0, 2*Math.PI, true);
    ctx.fill();
    //draw sprite image
    ctx.drawImage(mario,x,300,)
    x += 5;
    if(x > 800 + 20){
        x = 20;
    }
    timer = requestAnimationFrame(main);
}


