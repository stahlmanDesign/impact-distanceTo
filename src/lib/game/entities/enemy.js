ig.module(
    'game.entities.enemy'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityEnemy = ig.Entity.extend({

        size: { x: 32, y: 32 },
        collides: ig.Entity.COLLIDES.ACTIVE,

        animSheet: new ig.AnimationSheet('media/enemy.png', 32, 32),

        init: function (x, y, settings) {

            this.parent(x, y, settings);

            this.addAnim('init', 1, [0]);
        },

        update: function() {

            this.parent();
        }
    });
});
