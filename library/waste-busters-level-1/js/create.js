import setGameStage from 'shared/phaser/methods/set_game_stage/0.1';
//import randomizeLocations from 'shared/phaser/methods/randomize_locations/0.1';
import addPlayer from 'shared/phaser/methods/add_player/0.1';

export default function () {
    this.controller = {};

    setGameStage.call(this, {
        width: 4000,
        height: 640,
        top: -100,
    });

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.helpers.makeBackground.call(this);
    this.helpers.makeGround.call(this);
    this.helpers.makePlatforms.call(this);
    this.helpers.makeItems.call(this);

    addPlayer.call(this, {
        left: 32,
        top: this.game.world.height - 350,
        image: 'turtle',
        bounceY: 0.2,
        gravityY: 400,
        rightFrames: [0, 1, 2, 3],
        scale: [.15, .15],
    });
}
