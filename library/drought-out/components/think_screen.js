import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    const ANSWERS = [
        'dry',
        'parched',
        'dusty',
        'hot',
        'no-water',
        'thirsty',
        'arid'
    ];

    var onSelect = function (ref) {
        if (ANSWERS.indexOf(ref) < 0) ref = "incorrect";
        playAudio.call(this, ref, playAudio.bind(this, 'dummy', _.noop));
        // the dummy update allows the incorrect sound to be played repeatedly
    };

    var playAudio = function (ref, cb) {
        debugger;
        this.updateGameState({
            path: 'media',
            data: {
                play: ref
            },
            callback: cb
        });
    };

    // TODO why are the sounds not playing AIM 1/20/17

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="think"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WhatDoYou.mp3`}/>
            <skoash.Image className="hidden" ref="hidden" src={`${ENVIRONMENT.MEDIA_GAME}ImageAssets/FR_1.png`}/>
            <skoash.Component className="frame animated">
                <p>
                    What do you think of when you hear<br />
                    the word <span className="inline drought-word"/>
                </p>
                <skoash.MediaCollection
                    ref="media-collection"
                    play={_.get(props, 'data.media.target', null)}
                >
                    <skoash.Audio
                        type="sfx"
                        data-ref="incorrect"
                        src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/Wrong.mp3`}
                        complete={true}
                        checkComplete={false}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="dry"
                        src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WhatDry.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="parched"
                        src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WhatParched.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="dusty"
                        src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WhatDusty.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="hot"
                        src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WhatHot.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="no-water"
                        src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WhatNoWater.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="thirsty"
                        src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WhatThirsty.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="arid"
                        src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WhatArid.mp3`}
                    />
                </skoash.MediaCollection>
                <skoash.Selectable
                    ref="selectable"
                    selectClass="HIGHLIGHTED"
                    onSelect={onSelect}
                    dataTarget="media"
                    answers={ANSWERS}
                    list={[
                        <li className="dry" data-ref="dry" correct></li>,
                        <li className="green" data-ref="green"></li>,
                        <li className="parched" data-ref="parched" correct></li>,
                        <li className="monsoon" data-ref="monsoon"></li>,
                        <li className="damp" data-ref="damp"></li>,
                        <li className="dusty" data-ref="dusty" correct></li>,
                        <li className="hot" data-ref="hot" correct></li>,
                        <li className="no-water" data-ref="no-water" correct></li>,
                        <li className="thirsty" data-ref="thirsty" correct></li>,
                        <li className="wet" data-ref="wet"></li>,
                        <li className="tropical" data-ref="tropical"></li>,
                        <li className="arid" data-ref="arid" correct></li>,
                        <li className="steamy" data-ref="steamy"></li>,
                        <li className="balmy" data-ref="balmy"></li>,
                        <li className="swampy" data-ref="swampy"></li>,
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
