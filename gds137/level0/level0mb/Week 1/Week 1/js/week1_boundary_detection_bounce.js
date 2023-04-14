// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new Player();
	 player1 = new GameObject();

	
	//------Declare the Player's speed on the x and y axis------
	player.vx = 5;
	player.vy = 2;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	player.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(player.x > canvas.width - player.width/2)
	{
		player.vx = -player.vx;	
		player.x = canvas.width - player.width/2;
		player.color ='black'
	}
	//left bounce
	if(player.x < 50)
	{
		player.vx = -player.vx;
		player < 50 - player.width/2;
		player.color = 'magenta'

	}
	//bottom bounce
	if(player.y > canvas.height+50-player.height)
	{
		player.vy = -player.vy;
		player.y > canvas.height - player.height/2;
		player.color = 'green'
	}
	//top bounce
	if(player.y < player.height+750 - canvas.height)
	{
		player.vy = -player.vy;
		player.y < player.height -canvas.height;
		player.color = 'red'
	}

	//---------------------------------------------------
	
	player.draw();
}
