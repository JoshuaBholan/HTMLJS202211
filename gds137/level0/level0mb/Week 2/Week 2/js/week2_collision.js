//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var paddle;

//This is used to stop the player from moving through obstacles.
var prevX;
var prevY;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	paddle = new GameObject();
	paddle.x = 8;
	paddle.width = 15;
	paddle.height = 150;
	paddle.color = "purple"
	
	//lBlock1 = new GameObject(canvas.width - 750, canvas.height/2+75, 100, 100,"#00ff00");
	//lBlock2 = new GameObject(canvas.width - 550, canvas.height/2+75, 100, 100,"#00ff00");
	//rBlock1 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "orange");
	rBlock2 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "blue");
	rBlock3 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "red");
	rBlock2.x = 9;
	rBlock2.y = -52;
	//rBlock1.x = 9;
	//rBlock1.y = 850;
	rBlock3.x = 9;
	rBlock3.y = 850;
	

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

	
	//Impede movement
	if(rBlock2.hitTestObject(paddle))
	{
		paddle.y = prevY;
		console.log("colliding");
	}
	else
	{
		prevY = paddle.y;
	}
	if(rBlock3.hitTestObject(paddle))
	{
		paddle.y = prevY;
		console.log("colliding");
	}
	else
	{
		prevY = paddle.y;
	}
	//paddle collision
	if(Ball.hitTestObject(paddle))
	{
		Ball.vx = -Ball.vx;
		Ball < 50 - Ball.width/2;
	}
	if(Ball.x < 0)
	{
		Ball.x = 550;
		Ball.y = 480;
	}
	
	//Update the Screen
	paddle.drawRect();
	//lBlock1.drawCircle();
	//lBlock2.drawCircle();
	//rBlock1.drawRect();
	rBlock2.drawRect();
	rBlock3.drawRect();

}

