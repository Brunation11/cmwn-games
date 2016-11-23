import setGameStage from 'shared/phaser/methods/set_game_stage/0.1';
import addItems from 'shared/phaser/methods/add_items/0.1';
import addPlayer from 'shared/phaser/methods/add_player/0.1';
import randomizeLocations from 'shared/phaser/methods/randomize_locations/0.1';

export default function () {
    this.controller = {};

    setGameStage.call(this);

    //  A simple background for our this.game
    this.game.add.sprite(0, 0, 'sky');
    this.game.add.sprite(800, 0, 'sky');
    this.game.add.sprite(1600, 0, 'sky');

    this.cursors = this.game.input.keyboard.createCursorKeys();

    let platformOpts = randomizeLocations(_.times(4, () => ({})), [
    [400, 400],
    [-150, 250],
    [800, 400],
    [650, 250],
    ]);

    platformOpts.unshift({
        scale: [5, 2],
        left: 0,
        top: this.game.world.height - 64,
    });

    addItems.call(this, {
        group: 'platforms', defaultOpts: {image: 'ground', collideWorldBounds: false}
    }, platformOpts);

    addItems.call(this, {
        group: 'stars', defaultOpts: {image: 'star', gravityY: 12, immovable: false}
    }, _.times(11, i => ({
        left: i * 70,
        bounceY: 0.7 + Math.random() * 0.2,
    })));

    addItems.call(this, {group: 'healths'}, [
    { left: 11 * 70, top: 0, image: 'health' }
    ]);

    addItems.call(this, {group: 'diamonds'}, [
    { left: 200, top: 200, image: 'diamond'}
    ]);

    addItems.call(this, {group: 'spikes'}, [
    { left: 300, top: 300, image: 'diamond', angle: 180, anchor: [0.5, 0.5]}
    ]);

    addPlayer.call(this, {
        left: 32,
        top: this.game.world.height - 150,
        image: 'dude',
        bounceY: 0.2,
        gravityY: 300,
    });

    this.score = 0,
    this.scoreText = this.game.add.text(16, 16, `Score: ${this.score}`, { fontSize: '32px', fill: '#000' });

    this.lives = 3,
    this.livesText = this.game.add.text(this.game.camera.view.width - 166, 16, `Lives: ${this.lives}`,
        { fontSize: '32px', fill: '#000' });

    this.audio = {
        bump: this.game.add.audio('bump'),
        slam: this.game.add.audio('slam'),
    };
}
