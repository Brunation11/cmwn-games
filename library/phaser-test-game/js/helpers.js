export default {
    onBump: function () {
        if (this.player.body.velocity.y > 0) {
            this.audio.bump.play();
        } else if (this.player.body.velocity.y < -75) {
            this.audio.slam.play();
        }
    },
    collectStar: function (p, star) {
        var e;

        // Removes the star from the screen
        star.kill();

        //  Add and update the score
        this.score += 10;
        this.scoreText.text = 'Score: ' + this.score;

        if (this.score >= 20) {
            e = new Event('game-event');
            e.complete = true;
            if (window.frameElement) window.frameElement.dispatchEvent(e);
            this.isComplete = true;
        }
    },
    collectHealth: function (p, h) {
        h.kill();

        this.lives += 1;
        this.livesText.text = `Lives: ${this.lives}`;
    },
    hitSpike: function (p) {
        if (this.isHit) return;
        this.isHit = true;
        p.body.velocity.y = -200;

        this.lives -= 1;
        this.livesText.text = `Lives: ${this.lives}`;

        p.body.velocity.x = (p.body.velocity.x === Math.abs(p.body.velocity.x) ? -1 : 1) * 200;

        setTimeout(() => {
            this.isHit = false;
        }, 1000);
    },
    rideDiamond: function (p, diamond) {
        diamond.body.velocity.x = (diamond.body.velocity.x === Math.abs(diamond.body.velocity.x)) ?
            100 : -100;
    },
};
