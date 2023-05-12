//Declare my variables

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

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
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
	
	//lBlock1 = new GameObject(canvas.width - 750, canvas.height/2+75, 100, 100,"#00ff00");
	//lBlock2 = new GameObject(canvas.width - 550, canvas.height/2+75, 100, 100,"#00ff00");
	//rBlock1 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "orange");
	rBlock2 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "blue");
	rBlock3 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "red");
	rBlock4 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "red");
	rBlock5 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "red");
	rBlock2.x = 9;
	rBlock2.y = -52;
	//rBlock1.x = 9;
	//rBlock1.y = 850;
	rBlock3.x = 9;
	rBlock3.y = 850;
	rBlock4.x = 1000;
	rBlock4.y = -52;
	rBlock5.x = 1000;
	rBlock5.y = 850;;
	
	
	

	//Set the Animation Timer
	timer = setInterval(animate, interval);
	
function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	//Move the Player to the right
	//if(d)
	//{
		//console.log("Moving Right");
		//player.x += 2;
	//}
	
	//if(a)
	//{
		//console.log("Moving Right");
		//player.x += -2;
	//}
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
	
	
	
	
	//Check Collisions
	
	//Demonstrates Accuracy of Bounding Box Collision
	//if(lBlock1.hitTestObject(player))
	//{
		//change color
		//lBlock1.color = "yellow";
	//}
	//else
	//{
		//lBlock1.color = "#00ff00";
	//}
	
	//Shows Bounding Boxes
	//if(lBlock2.hitTestObject(player))
	//{
		//draw bounding boxes
		//context.strokeRect(lBlock2.x- lBlock2.width/2, lBlock2.y - lBlock2.height/2, lBlock2.width, lBlock2.height)
		//context.strokeRect(player.x- player.width/2, player.y - player.height/2, player.width, player.height)
	//}
	
	//Demonstrates how often collisions take place
	//if(rBlock1.hitTestObject(player))
	//{
	//	console.log("colliding");
	//}
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
		paddle.y = prevyyy;
		console.log("colliding");
	}
	else
	{
		prevY = paddle.y;
	}
	//right bottom collision
	if(rBlock5.hitTestObject(paddle2))
	{
		paddle.y = prevyyyy;
		console.log("colliding");
	}
	else
	{
		prevY = paddle.y;
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
	
	
	//Update the Screen
	paddle.drawRect();
	paddle2.drawRect();
	//lBlock1.drawCircle();
	//lBlock2.drawCircle();
	//rBlock1.drawRect();
	rBlock2.drawRect();
	rBlock3.drawRect();
	rBlock4.drawRect();
	rBlock5.drawRect();

}

