var player1 = new GameObject()
// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var Ball;
var player;
var p1Wins = 0;
var p2Wins = 0;
var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var paddle;
var paddle2;

//This is used to stop the player from moving through obstacles.
var prevX;
var prevY;
var prevyy;
var prevyyy;
var prevyyyy;
paddle = new GameObject();
	paddle.x = 8;
	paddle.width = 15;
	paddle.height = 150;
	paddle.color = "purple"
	paddle2 = new GameObject();
	paddle2.x = 1020;
	paddle2.width = 15;
	paddle2.height = 150;
	paddle2.color = "black"





	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	Ball = new GameObject();
	
	//------Declare the Player's speed on the x and y axis------
	Ball.vx = 10;
	Ball.vy = 0;
	
	//----------------------------------------------------
	timer = setInterval(animate, interval);

	
	
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	context.save();
	context.strokeStyle = "yellow";
	context.beginPath();
	context.moveTo(501,0);
	context.lineTo(501,1000);
	context.closePath();
	context.lineWidth = 5;
	context.stroke();
	context.restore();
	
	
	
	//----Movement Using the Player's move() function----
	Ball.move();
	
	
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	//if(Ball.x > canvas.width - Ball.width/2)
	//{
		//Ball.vx = -Ball.vx;	
		//Ball.x = canvas.width - Ball.width/2;
		//Ball.color ='black'
	//}
	//left bounce
	//if(Ball.x < 50)
	//{
		//Ball.vx = -Ball.vx;
		//Ball < 50 - Ball.width/2;
		//Ball.color = 'magenta'

	//}
	//bottom bounce
	if(Ball.y > canvas.height+50-Ball.height)
	{
		Ball.vy = -Ball.vy;
		Ball.y > canvas.height - Ball.height/2;
		Ball.color = 'green'
	}
	//top bounce
	if(Ball.y < Ball.height+750 - canvas.height)
	{
		Ball.vy = -Ball.vy;
		Ball.y < Ball.height -canvas.height;
		Ball.color = 'red'
	}
	if(Ball.x > 1200)
	{
		p1Wins ++;
		console.log("p1 wins")
	}
	if(Ball.x < -180)
	{
		p2Wins ++;
		console.log("p2 wins")
	}
	context.fillText("Player 1 | Player 2",460,25,500);
	context.fillText(p1Wins,474,50,500);
	context.fillText(" - ",495,50,500);
	context.fillText(p2Wins,516,50,500);
	context.drawImage(img,someX, someY, someWidth, someHeight);
	
	//---------------------------------------------------
	
	Ball.drawCircle();
}


