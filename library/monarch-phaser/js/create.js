import setGameStage from 'shared/phaser/methods/set_game_stage/0.1';
import addPlayer from 'shared/phaser/methods/add_player/0.1';

export default function () {
    this.controller = {};

    setGameStage.call(this, {
        width: 30000,
        height: 740,
        top: -200,
    });

    this.helpers.makeBackground.call(this);

    addPlayer.call(this, {
        left: 300,
        top: this.game.world.height - 650,
        image: this.opts.playerImage,
        bounceY: 0,
        gravityY: 0,
        body: this.opts.playerBody,
        rightFrames: [0, 1, 2, 3],
        scale: this.opts.playerScale,
        onWorldBounds: this.helpers.onWorldCollide.bind(this),
    });

    this.helpers.makeItems.call(this);

    this.data = _.defaults({
        levels: {
            [this.opts.level]: {
                start: true,
                score: 0,
                hits: 0,
            }
        }
    }, this.data);

    this.audio = _.reduce(this.audio, (a, v, k) => {
        a[k] = this.game.add.audio(k);
        return a;
    }, {});

    this.helpers.emitData.call(this);
}
