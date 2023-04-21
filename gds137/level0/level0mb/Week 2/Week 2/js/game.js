var player1 = new GameObject()
// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var Ball;



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	Ball = new GameObject();
	
	//------Declare the Player's speed on the x and y axis------
	Ball.vx = 5;
	Ball.vy = 2;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);
	
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//----Movement Using the Player's move() function----
	Ball.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(Ball.x > canvas.width - Ball.width/2)
	{
		Ball.vx = -Ball.vx;	
		Ball.x = canvas.width - Ball.width/2;
		Ball.color ='black'
	}
	//left bounce
	if(Ball.x < 50)
	{
		Ball.vx = -Ball.vx;
		Ball < 50 - Ball.width/2;
		Ball.color = 'magenta'

	}
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
	

	//---------------------------------------------------
	
	Ball.drawCircle();
}


