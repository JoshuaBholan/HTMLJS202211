var x=false;
var caveData ={
	info:{
		layout:[
			[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
			[0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0],
			[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
			[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
			[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
			[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
			[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,7],
			[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
			
			
		],
		src:`images/Tilefront.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:128, height:128, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:512, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:640, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:768, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:128, height:128, startX:896, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[8,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,0,3,0,3,3,0,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,3,0,3,3,0,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			],
			src:`images/Tile.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[8,8,6,8,6,6,8,6,6,6,6,6,6,8,8,1,8,8,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
					
					
				],
				src:`images/Tile.png`,
			},
			states:caveData.states
			
			}