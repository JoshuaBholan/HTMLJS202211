// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var Platform;

//---------------Set Friction and Gravity-----------------
var frictionX = .95;	
var frictionY = .97;
var gravity = 1;
var score = 0;
var prevX;
var prevXX;
//--------------------------------------------------------



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	player = new GameObject();
	Platform = new GameObject((canvas.width-500), 730, 250, 40, "blue");
	boundary1 = new GameObject(-108,700,200,200,"blue");
	boundary2 = new GameObject(1130,700,200,200,"blue");
	player.force = 6;
	player.color = "magenta";
	Platform.color = "cyan"
	player.vx = 5;
	player.vy = 0;
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Call just one of the functions below to view acceleration, friction, gravity and pixel lock.
	//showAcceleration();
	//showFriction();
	//showGravity();
	//showPixelLock();
	//showBounce();
	context.font = "18px Arial";
	context.fillText("Score",60,45,50);
	context.fillText(score,120,45,50);
	context.strokeStyle = "Black";
	context.beginPath();
	context.moveTo(Platform.x,Platform.y);
	context.lineTo(player.x,player.y);
	context.closePath();
	context.lineWidth = 1;
	context.stroke();
	context.restore();
	if (a)
	{
		Platform.x += -8;
	}
	if(d)
	{
		Platform.x +=8;
	}
	//right bounce
	if(player.x > canvas.width - player.width/2)
	{
		player.vx = -player.vx;	
		player.x = canvas.width - player.width/2;
	}
	//top bounce
	if(player.y < player.height+750 - canvas.height)
	{
		player.vy = -player.vy;
		player.y < player.height -canvas.height;
	}
	//left bounce
	if(player.x < 50)
	{
		player.vx = -player.vx;
		player < 50 - player.width/2;

	}
	
	player.vy *= frictionY;
	player.vx *= frictionX;
	
	player.vy += gravity;
	
	player.x += player.vx;
	player.y += player.vy;
	//player.vx *= frictionX;	
	//player.vy *= frictionY;
	//player.vy += gravity;
	//player.y += player.vy;
	
	//player.vy *= frictionY;
	//player.vx *= frictionX;
	
	//player.vy += gravity;
	
	//player.x += player.vx;
	//player.y += player.vy;
	//---------------------------------------------------------------------------------------
	
	//player.vx *= frictionX;
	//player.x += player.vx;
	//------Round the velocity before applying it to the position.--------------------------
    //------This will keep the object from moving fractions of a pixel----------------------
	//------This might not be noticeable now, but will help alot when things get complex----
	player.y += Math.round(player.vy);
	player.x += Math.round(player.vx);

	
	//--------------------Check Collision------------------------------------------------------
	if(player.y > canvas.height - player.height/2)
	{
		
		//--------Bounce the Ball---------------------------------------------------------------
		player.y = canvas.height - player.height/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		player.vy = -player.vy * 1.2;
		score = 0;

		
	}
	if(player.hitTestObject(Platform))
	{
		score = score + 1;
	}
	if(player.hitTestObject(Platform))
	{
		//player.y = Platform.height - player.height/2;
		//player.vy = -35;
		//player.vy = -player.vy * .99;
		//score = score + 1;

		// 1/6 of of far left paddle that sends ball far left, 
		//checks by seeing if the ball is within that 1/6 by if ball < 1/6 of the platforms width
		//Platform.width/6 = 1/6 of paddle
		if(player.x < Platform.x - Platform.width/6)
		{
			player.vy = -35;
			player.vx = -player.force*5;
			console.log("1/6")
		}

	}
//the 1/6 slightly left of middle of the paddle. 
//to find this, I took the width of the paddle (250) and divded by 6 to figure out what exactlty 1/6 of the paddle was which was (41.66)
// Then made an if statement saying if the ball was less than 1/6 + 41.66 (or 2/6) the paddle width And Greater than 1/6 the paddle width
// This elimates the far left 1/6 of paddle and gives us the 1/6 of the paddle we need
//Platform.width/6+41.66 = 2/6 of paddle
	if(player.hitTestObject(Platform))
	{
		if(player.x < Platform.x - Platform.width/6+41.66 && player.x > Platform.x - Platform.width/6)
		{
			player.vy = -35;
			player.vx = -player.force;
			console.log("2/6")
		}
	}
	//center 1/3 of paddle
	//since its 1/3 instead of 1/6 we need 2/6 of the padddle
	//we repeat the pattern, saying if ball is > 2/6 of the paddle but less than 4/6 instead of 3/6. 
	//Platform.width/6+124.98 = 4/6 of paddle
	if(player.hitTestObject(Platform))
	{
		if(player.x < Platform.x - Platform.width/6+124.98 && player.x > Platform.x - Platform.width/6+41.66)
		{
			player.vy = -35;
			console.log("1/3")
		}
	}
	//repeat the process but now back to adding 1/6
	// Platform.width/6+166.64 = 5/6 of paddle
	if(player.hitTestObject(Platform))
	{
		if(player.x < Platform.x - Platform.width/6+166.64 && player.x > Platform.x - Platform.width/6+124.98)
		{
			player.vy = -35;
			player.vx = player.force;
			console.log("5/6")
		}
	}
	//Platform.width/6+208.3 = 6/6 of paddle
	if(player.hitTestObject(Platform))
	{
		if(player.x < Platform.x - Platform.width/6+208.3 && player.x > Platform.x - Platform.width/6+166.64)
		{
			player.vy = -35;
			player.vx = player.force*5;
			console.log("6/6")
		}
	}
	if(boundary1.hitTestObject(Platform))
	{
		Platform.x = prevX;
	}
	else{
		prevX = Platform.x;
	}
	if(boundary2.hitTestObject(Platform))
	{
		Platform.x = prevXX;
	}
	else{
		prevXX = Platform.x;
	}
	
	

	
	player.drawCircle();
	Platform.drawRect();
	boundary1.drawRect();
	boundary2.drawRect();
	
}


/*IMPORTANT: Below are four functions that demonstrate the various elements we will use to simulating Game Physics.
each function is a copy of the previous with more functionality added. 
ONLY CALL ONE OF THESE FUNCTIONS AT A TIME!!!!!!!!*/



function showAcceleration()
{
	//--------------Use Velocity and Acceleration to move around----------------------
	if(d)
	{	
		player.vx +=  player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
	player.y += player.vy;
}

function showFriction()
{
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	//--------------Apply friction to the Velocity X-----------------------------------------
	player.vx *= frictionX;
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
}

function showGravity()
{
	
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	//--------------Apply Gravity to the Velocity Y-----------------------------------------
	player.vy += gravity;
	player.y += player.vy;
	//---------------------------------------------------------------------------------------
	
	player.vx *= frictionX;
	player.x += player.vx;
}

function showPixelLock()
{
	
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	

	player.vx *= frictionX;	
	player.vy *= frictionY;
	
	//------Round the velocity before applying it to the position.--------------------------
    //------This will keep the object from moving fractions of a pixel----------------------
	//------This might not be noticeable now, but will help alot when things get complex----
	player.y += Math.round(player.vy);
	player.x += Math.round(player.vx);
	//--------------------------------------------------------------------------------------
}

function showBounce()
{
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	
	player.vy *= frictionY;
	player.vx *= frictionX;
	
	player.vy += gravity;
	
	player.x += player.vx;
	player.y += player.vy;
	
	//--------------------Check Collision------------------------------------------------------
	if(player.y > canvas.height - player.height/2)
	{
		
		//--------Bounce the Ball---------------------------------------------------------------
		player.y = canvas.height - player.height/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		player.vy = -player.vy * .90;
		score = 0;
		
	}
	if(player.hitTestObject(Platform))
	{
		//player.y = Platform.height - player.height/2;
		player.vy = -35;
		//player.vy = -player.vy * .99;
		score = score + 1;
	}

	
	//-----------------------------------------------------------------------------------------
}



