import setGameStage from 'shared/phaser/methods/set_game_stage/0.1';
// import addItems from 'shared/phaser/methods/add_items/0.1';
// import randomizeLocations from 'shared/phaser/methods/randomize_locations/0.1';
import addPlayer from 'shared/phaser/methods/add_player/0.1';

export default function () {
    this.controller = {};

    setGameStage.call(this);

    //  A simple background for our this.game
    this.game.add.sprite(0, 0, 'sky');
    this.game.add.sprite(800, 0, 'sky');
    this.game.add.sprite(1600, 0, 'sky');

    this.cursors = this.game.input.keyboard.createCursorKeys();

    addPlayer.call(this, {
        left: 32,
        top: this.game.world.height - 150,
        image: 'dude',
        bounceY: 0.2,
        gravityY: 300,
    });
}
