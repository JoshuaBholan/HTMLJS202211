/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src="images/MainMenu1.png"
//startButton.width=655;
//startButton.hitBoxWidth=1000
//startButton.height = 255;
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/MainMenu.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.color = `blue`
		startButton.img.src=`images/MainMenu2.png`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `yellow`
		startButton.img.src=`images/MainMenu1.png`
	}

	menuBackground.drawStaticImage();
	startButton.render()
	startButton.drawStaticImage()
	
	
}
	
	
