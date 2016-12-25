import setGameStage from 'shared/phaser/methods/set_game_stage/0.1';
import addPlayer from 'shared/phaser/methods/add_player/0.1';

export default function () {
    this.controller = {};

    setGameStage.call(this, {
        width: 20000,
        height: 740,
        top: -200,
    });

    this.helpers.makeBackground.call(this);
    this.helpers.makeItems.call(this);

    addPlayer.call(this, {
        left: 32,
        top: this.game.world.height - 450,
        image: this.opts.playerImage,
        bounceY: 0,
        gravityY: this.opts.gravityY,
        // body: this.opts.playerBody,
        rightFrames: [0, 1, 2, 3],
        scale: this.opts.playerScale,
        onWorldBounds: this.helpers.onWorldCollide.bind(this),
    });

    this.data = _.defaults({
        levels: {
            [this.opts.level]: {
                start: true,
                score: 0,
                hits: 0,
            }
        }
    }, this.data);

    this.helpers.emitData.call(this);
}
