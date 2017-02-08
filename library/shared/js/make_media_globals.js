(function (gameName) {
    // remove window.MEDIA once no games reference it
    var MEDIA = window.MEDIA = {
        BASE: ENVIRONMENT.MEDIA
    };

<<<<<<< HEAD
    MEDIA.GAME = MEDIA.BASE + 'Games/' + gameName + '/';
    MEDIA.EFFECT = MEDIA.GAME + 'SoundAssets/effects/';
    MEDIA.VO = MEDIA.GAME + 'SoundAssets/vos/';
    MEDIA.IMAGE = MEDIA.GAME + 'ImageAssets/';
    MEDIA.SPRITE = MEDIA.GAME + 'SpritesAnimations/';
    MEDIA.FRAME = MEDIA.GAME + 'Frames/';

    MEDIA.MOCK = {};
    MEDIA.MOCK.GAME = MEDIA.BASE + 'Games/mock-game/';
    MEDIA.MOCK.EFFECT = MEDIA.MOCK.GAME + 'SoundAssets/effects/';
    MEDIA.MOCK.VO = MEDIA.MOCK.GAME + 'SoundAssets/vos/';
    MEDIA.MOCK.IMAGE = MEDIA.MOCK.GAME + 'ImageAssets/';
    MEDIA.MOCK.SPRITE = MEDIA.MOCK.GAME + 'SpritesAnimations/';
    MEDIA.MOCK.FRAME = MEDIA.MOCK.GAME + 'Frames/';
=======
    const GAME = 'games/';
    const EFFECT = 'sound-assets/effects/';
    const VO = 'sound-assets/vos/';
    const IMAGE = 'image-assets/';
    const SPRITE = 'sprites-animations/';
    const FRAME = 'frames/';
    const FONT = 'fonts/';
    const SHARED = 'shared/';
    const MOCK_GAME = 'mock-game/';

    MEDIA.FONT = MEDIA.BASE + FONT;
    MEDIA.SHARED = MEDIA.BASE + GAME + SHARED;

    MEDIA.GAME = MEDIA.BASE + GAME + gameName + '/';
    MEDIA.EFFECT = MEDIA.GAME + EFFECT;
    MEDIA.VO = MEDIA.GAME + VO;
    MEDIA.IMAGE = MEDIA.GAME + IMAGE;
    MEDIA.SPRITE = MEDIA.GAME + SPRITE;
    MEDIA.FRAME = MEDIA.GAME + FRAME;
    MEDIA.FONT = MEDIA.GAME + FONT;

    MEDIA.MOCK = {};
    MEDIA.MOCK.GAME = MEDIA.BASE + GAME + MOCK_GAME;
    MEDIA.MOCK.EFFECT = MEDIA.MOCK.GAME + EFFECT;
    MEDIA.MOCK.VO = MEDIA.MOCK.GAME + VO;
    MEDIA.MOCK.IMAGE = MEDIA.MOCK.GAME + IMAGE;
    MEDIA.MOCK.SPRITE = MEDIA.MOCK.GAME + SPRITE;
    MEDIA.MOCK.FRAME = MEDIA.MOCK.GAME + FRAME;
    MEDIA.MOCK.FONT = MEDIA.MOCK.GAME + FONT;
>>>>>>> 2288e39852236075335e8ba1f0309d8c8fa3c636

    window.CMWN.MEDIA = MEDIA;
}(window.CMWN.gameFolder));
