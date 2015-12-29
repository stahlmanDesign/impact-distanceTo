ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityPlayer = ig.Entity.extend({

        size: { x: 32, y: 32 },
        collides: ig.Entity.COLLIDES.PASSIVE,
        accelGround: 100,
        accelAir:100,

        animSheet: new ig.AnimationSheet('media/player.png', 32, 32),

        init: function (x, y, settings) {

            this.parent(x, y, settings);

            this.addAnim('init', 1, [0]);
        },

        update: function() {

	        var accel = this.standing ? this.accelGround : this.accelAir;

			if( ig.input.pressed('right') ) {
				this.accel.x = accel;
				//this.currentAnim = this.anims.retreat;
				//this.flip = true;
			// move left
			} else if( ig.input.pressed('left') ) {
				this.accel.x = -accel;
				//this.currentAnim = this.anims.advance;
				//this.flip = false;

			} else if( ig.input.pressed('up') ) {
				this.accel.y = -accel;
				//this.currentAnim = this.anims.advance;
				//this.flip = false;

			} else if( ig.input.pressed('down') ) {
				this.accel.y = accel;
				//this.currentAnim = this.anims.advance;
				//this.flip = false;

			} else if( ig.input.pressed('space') ) {
				this.vel.x = 0;
				this.vel.y = 0;
				this.accel.x = 0;
				this.accel.y = 0;
				//this.currentAnim = this.anims.advance;
				//this.flip = false;

			}

            this.parent();
        }
    });
});
