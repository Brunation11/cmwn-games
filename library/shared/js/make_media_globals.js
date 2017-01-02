(function (gameName) {
    window.MEDIA = {
        BASE: ENVIRONMENT.MEDIA
    };
    window.MEDIA.GAME = window.MEDIA.BASE + 'Games/' + gameName + '/';
    window.MEDIA.EFFECT = window.MEDIA.GAME + 'SoundAssets/effects/';
    window.MEDIA.VO = window.MEDIA.GAME + 'SoundAssets/vos/';
    window.MEDIA.VIDEOVOS = window.MEDIA.GAME + 'SoundAssets/videoVOS/';
    window.MEDIA.IMAGE = window.MEDIA.GAME + 'ImageAssets/';
    window.MEDIA.SPRITE = window.MEDIA.GAME + 'SpritesAnimations/';
    window.MEDIA.FRAME = window.MEDIA.GAME + 'Frames/';
}(window.gameFolder));
