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
        body: [315, 396, 100, 150],
        rightFrames: [6, 7, 8, 9, 10, 11],
        leftFrames: [5, 4, 3, 2, 1, 0],
        scale: [.15, .15],
        checkCollisionUp: false,
    });

    this.data = {
        hits: 0,
        bagCount: 0,
        score: 0,
        lives: 1,
        trucks: 0,
    };

    //  emit event with data to skoash game
    this.emitEvent({
        updateGameState: {
            path: 'data',
            data: this.data
        }
    });
}
