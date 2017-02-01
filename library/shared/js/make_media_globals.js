(function (gameName) {
    // remove window.MEDIA once no games reference it
    var MEDIA = window.MEDIA = {
        BASE: ENVIRONMENT.MEDIA
    };

    MEDIA.GAME = MEDIA.BASE + 'Games/' + gameName + '/';
    MEDIA.EFFECT = MEDIA.GAME + 'SoundAssets/effects/';
    MEDIA.VO = MEDIA.GAME + 'SoundAssets/vos/';
    MEDIA.IMAGE = MEDIA.GAME + 'ImageAssets/';
    MEDIA.SPRITE = MEDIA.GAME + 'SpritesAnimations/';
    MEDIA.FRAME = MEDIA.GAME + 'Frames/';

    MEDIA.MOCK = {};
    MEDIA.MOCK.GAME = MEDIA.BASE + 'Games/mockGame/';
    MEDIA.MOCK.EFFECT = MEDIA.MOCK.GAME + 'SoundAssets/effects/';
    MEDIA.MOCK.VO = MEDIA.MOCK.GAME + 'SoundAssets/vos/';
    MEDIA.MOCK.IMAGE = MEDIA.MOCK.GAME + 'ImageAssets/';
    MEDIA.MOCK.SPRITE = MEDIA.MOCK.GAME + 'SpritesAnimations/';

    window.CMWN.MEDIA = MEDIA;
}(window.CMWN.gameFolder));
