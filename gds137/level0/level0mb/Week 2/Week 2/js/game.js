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
var img = document.getElementById("ric");




	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	Ball = new GameObject();
	
	//------Declare the Player's speed on the x and y axis------
	Ball.vx = 10;
	Ball.vy = 10;
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
	 

	//---------------------------------------------------
	
	Ball.drawCircle();
}


