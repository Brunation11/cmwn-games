import setGameStage from 'shared/phaser/methods/set_game_stage/0.1';
import addItems from 'shared/phaser/methods/add_items/0.1';
// import randomizeLocations from 'shared/phaser/methods/randomize_locations/0.1';
import addPlayer from 'shared/phaser/methods/add_player/0.1';

export default function () {
    this.controller = {};

    setGameStage.call(this, {
        width: 2000,
        height: 540,
    });

    //  A simple background for our this.game
    addItems.call(this, {
        group: 'sky', enableBody: false, defaultOpts: {collideWorldBounds: false}
    }, [
        {
            left: 0,
            top: 0,
            image: 'sky',
            scale: [.5, .5],
        }
    ]);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    let backgroundGroundOpts = [
        {
            left: 0,
            crop: [20, 0, 400, 200],
        },
        {
            left: 400,
            crop: [860, 0, 400, 200],
        },
        // {
        //     left: 697,
        //     crop: [545, 0, 200, 200],
        // },
    ];

    addItems.call(this, {
        group: 'platformViews', enableBody: false, defaultOpts: {
            top: 370,
            collideWorldBounds: false,
            image: 'ground',
        }
    }, backgroundGroundOpts);

    let groundOpts = [
        {
            left: 0,
            crop: [20, 60, 400, 200],
        },
        {
            left: 400,
            crop: [860, 60, 400, 200],
        },
        // {
        //     left: 697,
        //     crop: [545, 60, 200, 200],
        // },
    ];

    addItems.call(this, {
        group: 'platforms', defaultOpts: {
            top: 430,
            collideWorldBounds: false,
            image: 'ground',
        }
    }, groundOpts);

    addPlayer.call(this, {
        left: 32,
        top: this.game.world.height - 250,
        image: 'turtle',
        bounceY: 0.2,
        gravityY: 300,
        rightFrames: [0, 1, 2, 3],
        scale: [.25, .25],
    });
}
