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

    MEDIA.MOCK.GAME = MEDIA.BASE + 'Games/mockGame/';
    MEDIA.MOCK.EFFECT = MEDIA.GAME + 'SoundAssets/effects/';
    MEDIA.MOCK.VO = MEDIA.GAME + 'SoundAssets/vos/';
    MEDIA.MOCK.IMAGE = MEDIA.GAME + 'ImageAssets/';
    MEDIA.MOCK.SPRITE = MEDIA.GAME + 'SpritesAnimations/';

    window.CMWN = {
        MEDIA
    };
}(window.gameFolder));
