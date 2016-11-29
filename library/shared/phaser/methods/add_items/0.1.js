export default function (groupOpts = {}, optsArray = []) {
    groupOpts.defaultOpts = _.defaults(groupOpts.defaultOpts, {
        scale: [1, 1],
        left: 0,
        top: 0,
        image: 'ground',
        immovable: true,
        bounceX: 1,
        bounceY: 1,
        gravityX: 0,
        gravityY: 0,
        collideWorldBounds: true,
        angle: 0,
        anchor: [0, 0],
    });

    groupOpts = _.defaults(groupOpts, {
        enableBody: true,
        group: 'platforms'
    });

    if (!this[groupOpts.group]) {
        //  The platforms group contains the ground and the 2 ledges we can jump on
        this[groupOpts.group] = this.game.add.group();

        //  We will enable physics for any object that is created in this group
        this[groupOpts.group].enableBody = groupOpts.enableBody;
    }

    _.each(optsArray, opts => {
        opts = _.defaults(opts, groupOpts.defaultOpts);

        let item = this[groupOpts.group].create(opts.left, opts.top, opts.image);
        item.scale.setTo(...opts.scale);
        if (opts.crop) {
            item.crop(new Phaser.Rectangle(...opts.crop));
            if (groupOpts.enableBody) {
                item.body.width = opts.crop[2];
                item.body.height = opts.crop[3];
            }
        }
        item.angle = opts.angle;
        item.anchor.setTo(...opts.anchor);

        if (groupOpts.enableBody) {
            item.body.immovable = opts.immovable;
            item.body.collideWorldBounds = opts.collideWorldBounds;
            item.body.bounce.x = opts.bounceX;
            item.body.bounce.y = opts.bounceY;
            item.body.gravity.x = opts.gravityX;
            item.body.gravity.y = opts.gravityY;
        }
    });
}
