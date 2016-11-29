import setGameStage from 'shared/phaser/methods/set_game_stage/0.1';
import addItems from 'shared/phaser/methods/add_items/0.1';
// import randomizeLocations from 'shared/phaser/methods/randomize_locations/0.1';
import addPlayer from 'shared/phaser/methods/add_player/0.1';

export default function () {
    this.controller = {};

    setGameStage.call(this, {
        width: 2000,
        height: 440,
    });

    //  A simple background for our this.game
    this.game.add.image(0, 0, 'sky');

    this.cursors = this.game.input.keyboard.createCursorKeys();

    let groundOpts = [
        {
            left: 0,
            top: 400,
            image: 'ground',
        }
    ];

    addItems.call(this, {
        group: 'platforms', defaultOpts: {collideWorldBounds: false}
    }, groundOpts);

    addPlayer.call(this, {
        left: 32,
        top: this.game.world.height - 150,
        image: 'turtle',
        bounceY: 0.2,
        gravityY: 300,
        rightFrames: [0, 1, 2, 3],
        scale: [.25, .25],
    });
}
