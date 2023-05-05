//Declare my variables
var player;
var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var paddle;


	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	paddle = new GameObject();

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
		//console.log("Moving Left");
		//player.x += -2;
	//}
	if(w)
	{
		console.log("Moving Up");
		paddle.y += -2;
	}
	if(s)
	{
		console.log("Moving Down");
		paddle.y += 2;
	}
	if(up)
	{
		console.log("Moving Up")
		paddle2.y += -2;
	}
	if(down)
	{
		console.log("Moving Down")
		{
			paddle2.y += 2;
		}
	}
	
	//Update the Screen
	paddle.drawRect();
}

