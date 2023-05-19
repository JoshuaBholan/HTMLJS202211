var player1 = new GameObject()
// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var Ball;
var player;
var paddle;
var paddle2;
var prevX;
var prevY;
var prevyy;
var prevyyy;
var prevyyyy;
var p1Wins = 0;
var p2Wins = 0;
//1000 ms or 1 second / FPS
var img = document.getElementById("ric");
var someHeight = 50;
var someX = 50;
var someWidth = 50;
var someY = 50;






	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	Ball = new GameObject();
	
	//------Declare the Player's speed on the x and y axis------
	Ball.vx = 10;
	Ball.vy = 0;
	
	//----------------------------------------------------
	//Instantiate the Player
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
	rBlock2 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "blue");
	rBlock3 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "red");
	rBlock4 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "red");
	rBlock5 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "red");
	rBlock2.x = 9;
	rBlock2.y = -52;
	rBlock3.x = 9;
	rBlock3.y = 850;
	rBlock4.x = 1000;
	rBlock4.y = -52;
	rBlock5.x = 1000;
	rBlock5.y = 850;


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
	if(w)
	{
		//console.log("Moving Right");
		paddle.y += -2;
	}
	if(s)
	{
		//console.log("Moving Right");
		paddle.y += 2;
	}
	if(up)
	{
		//console.log("Moving Right");
		paddle2.y += -2;
	}
	if(down)
	{
		//console.log("Moving Right");
		paddle2.y += 2;
	}
	
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
	if(Ball.hitTestObject(paddle)) //top
	{
		if(Ball.y < paddle.y - paddle.height/3)
		{
			Ball.vx = 10;
			Ball.vy = -10;
		}
	}
	if(Ball.hitTestObject(paddle)) //middle
	{
		if(Ball.y < paddle.y - paddle.height/3+50)
		{
			Ball.vx = -Ball.vx
		}
	}
	if(Ball.hitTestObject(paddle)) //bottom
	{
		if(Ball.y > paddle.y - paddle.height/3 + 100)
		{
			Ball.vx = -10;
			Ball.vy = 10;
		}
	}
	if(Ball.hitTestObject(paddle2)) //top for paddle2
	{
		if(Ball.y < paddle2.y - paddle2.height/3)
		{
			Ball.vx = -10;
			Ball.vy = -10;
		}
	}
	if(Ball.hitTestObject(paddle2)) //middle for paddle 2
	{
		if(Ball.y < paddle2.y - paddle2.height/3+50)
		{
			Ball.vx = -Ball.vx
		}
	}
	if(Ball.hitTestObject(paddle2)) //bottom for paddle 2
	{
		if(Ball.y > paddle2.y - paddle2.height/3 + 100)
		{
			Ball.vx = 10;
			Ball.vy = 10;
		}
	}

	
	//Impede movement
	if(rBlock2.hitTestObject(paddle))
	{
		paddle.y = prevyy+10;
		console.log("colliding");
	}
	else
	{
		prevyy = paddle.y;
	}
	//stops movement on bottom
	if(rBlock3.hitTestObject(paddle))
	{
		paddle.y = prevY;
		console.log("colliding");
	}
	else
	{
		prevY = paddle.y;
	}
	//right top collosion
	if(rBlock4.hitTestObject(paddle2))
	{
		paddle2.y = prevyyy;
		console.log("colliding");
	}
	else
	{
		prevyyy = paddle2.y;
	}
	//right bottom collision
	if(rBlock5.hitTestObject(paddle2))
	{
		paddle2.y = prevyyyy;
		console.log("colliding");
	}
	else
	{
		prevyyyy = paddle2.y;
	}

	//if(rBlock1.hitTestObject(paddle))
	//{
		//paddle.y = prevY;
		//console.log("colliding");
	//}
	//else
	//{
		//prevY = paddle.y;
	//}
	//paddle collision
	if(Ball.hitTestObject(paddle))
	{
		Ball.vx = -Ball.vx;
		Ball < 50 - Ball.width/2;
	}
	if(Ball.hitTestObject(paddle2))
	{
		Ball.vx = -Ball.vx;
		Ball < 50 - Ball.width/2;
	}
	if(Ball.x < -180)
	{
		Ball.x = 500;
		Ball.y = 490;
	}
	if(Ball.x > 1200)
	{
		Ball.x = 500;
		Ball.y = 490;
	}
	context.fillText("Player 1 | Player 2",460,25,500);
	context.fillText(p1Wins,474,50,500);
	context.fillText(" - ",495,50,500);
	context.fillText(p2Wins,516,50,500);
	context.drawImage(img,someX, someY, someWidth, someHeight);
	
	//---------------------------------------------------
	
	Ball.drawCircle();
	paddle.drawRect();
	paddle2.drawRect();
	rBlock2.drawRect();
	rBlock3.drawRect();
	rBlock4.drawRect();
	rBlock5.drawRect();
}


