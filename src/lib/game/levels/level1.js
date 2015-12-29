ig.module( 'game.levels.level1' )
.requires( 'impact.image','game.entities.enemy','game.entities.player' )
.defines(function(){
LevelLevel1=/*JSON[*/{
	"entities": [
		{
			"type": "EntityEnemy",
			"x": 372,
			"y": 216
		},
		{
			"type": "EntityPlayer",
			"x": 504,
			"y": 216
		}
	],
	"layer": [
		{
			"name": "collision",
			"width": 10,
			"height": 8,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 64,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "layer1",
			"width": 10,
			"height": 8,
			"linkWithCollision": true,
			"visible": 1,
			"tilesetName": "media/test.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 64,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1],
				[1,26,27,26,27,26,26,27,0,1],
				[1,10,10,10,10,10,10,10,0,1],
				[1,18,18,18,18,18,18,18,0,1],
				[1,26,26,26,26,26,26,26,0,1],
				[1,59,60,44,59,60,0,0,0,1],
				[1,0,0,0,0,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1]
			]
		}
	]
}/*]JSON*/;
LevelLevel1Resources=[new ig.Image('media/test.png')];
});