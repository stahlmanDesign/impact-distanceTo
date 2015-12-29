ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font',
	'game.levels.level1'
)
.defines(function(){

MyGame = ig.Game.extend({

	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),


	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.UP_ARROW, 'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
		ig.input.bind( ig.KEY.SPACE, 'space' );

		// Load the LevelTest as required above ('game.level.test')
		this.loadLevel( LevelLevel1 );

		ig.game.player = this.getEntitiesByType( EntityPlayer )[0];
		ig.game.enemy = this.getEntitiesByType( EntityEnemy)[0];
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		// Add your own, additional update code here
	},

	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();


		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;


		var dt = Math.floor(ig.game.player.distanceTo(ig.game.enemy));


		this.font.draw( 'distanceTo = ' + dt, x, y, ig.Font.ALIGN.CENTER );

		var ropeStart = {
			"x": ig.system.getDrawPos(ig.game.player.pos.x - ig.game.screen.x),
			"y": ig.system.getDrawPos(ig.game.player.pos.y - ig.game.screen.y)
		}
		var ropeEnd = {
			"x": ig.system.getDrawPos(ig.game.enemy.pos.x - ig.game.screen.x),
			"y": ig.system.getDrawPos(ig.game.enemy.pos.y - ig.game.screen.y)
		}

	        ig.system.context.strokeStyle = "white";
	        ig.system.context.lineWidth = 1;
	        ig.system.context.beginPath();
	        ig.system.context.moveTo(ropeStart.x,ropeStart.y);
	        ig.system.context.lineTo(ropeEnd.x,ropeEnd.y);
	        ig.system.context.stroke();
	        ig.system.context.closePath();


	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 620, 480, 2 );

});
