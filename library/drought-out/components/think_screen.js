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
        this.updateScreenData({
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
            <skoash.Audio type="voiceOver" src={`${MEDIA.VO}WhatDoYou.mp3`} />
            <skoash.Image className="hidden" ref="hidden" src={`${MEDIA.IMAGE}FR_1.png`} />
            <skoash.Component className="frame animated">
                <p>
                    What do you think of when you hear<br />
                    the word <span className="inline drought-word"/>
                </p>
                <skoash.MediaCollection
                    ref="media-collection"
                    play={_.get(props, 'data.selectable.target', null)}
                >
                    <skoash.Audio
                        type="sfx"
                        data-ref="incorrect"
                        src={`${MEDIA.EFFEct}Wrong.mp3`}
                        complete={true}
                        checkComplete={false}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="dry"
                        src={`${MEDIA.VO}WhatDry.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="parched"
                        src={`${MEDIA.VO}WhatParched.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="dusty"
                        src={`${MEDIA.VO}WhatDusty.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="hot"
                        src={`${MEDIA.VO}WhatHot.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="no-water"
                        src={`${MEDIA.VO}WhatNoWater.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="thirsty"
                        src={`${MEDIA.VO}WhatThirsty.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        data-ref="arid"
                        src={`${MEDIA.VO}WhatArid.mp3`}
                    />
                </skoash.MediaCollection>
                <skoash.Selectable
                    ref="selectable"
                    selectClass="HIGHLIGHTED"
                    onSelect={onSelect}
                    dataTarget="selectable"
                    answers={ANSWERS}
                    list={[
                        <li className="dry" data-ref="dry" correct></li>,
                        <li className="green" data-ref="incorrect"></li>,
                        <li className="parched" data-ref="parched" correct></li>,
                        <li className="monsoon" data-ref="incorrect"></li>,
                        <li className="damp" data-ref="incorrect"></li>,
                        <li className="dusty" data-ref="dusty" correct></li>,
                        <li className="hot" data-ref="hot" correct></li>,
                        <li className="no-water" data-ref="no-water" correct></li>,
                        <li className="thirsty" data-ref="thirsty" correct></li>,
                        <li className="wet" data-ref="incorrect"></li>,
                        <li className="tropical" data-ref="incorrect"></li>,
                        <li className="arid" data-ref="arid" correct></li>,
                        <li className="steamy" data-ref="incorrect"></li>,
                        <li className="balmy" data-ref="incorrect"></li>,
                        <li className="swampy" data-ref="incorrect"></li>,
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
