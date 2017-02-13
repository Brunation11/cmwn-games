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

    var onSelect = function (target) {
        if (ANSWERS.indexOf(target) < 0) ref = 'incorrect';
        playAudio.call(this, target, playAudio.bind(this, 'dummy', _.noop));
        // the dummy update allows the incorrect sound to be played repeatedly
    };

    var playAudio = function (target, cb) {
        this.updateScreenData({
            key: 'selectable',
            data: {
                play: target
            },
            callback: cb
        });
    };

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
                    play={_.get(props, 'data.selectable.play', null)}
                >
                    <skoash.Audio
                        type="sfx"
                        data-ref="incorrect"
                        src={`${MEDIA.EFFECT}Wrong.mp3`}
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
                    answers={ANSWERS}
                    list={[
                        <skoash.ListItem className="dry" data-ref="dry" correct />,
                        <skoash.ListItem className="green" data-ref="incorrect" />,
                        <skoash.ListItem className="parched" data-ref="parched" correct />,
                        <skoash.ListItem className="monsoon" data-ref="incorrect" />,
                        <skoash.ListItem className="damp" data-ref="incorrect" />,
                        <skoash.ListItem className="dusty" data-ref="dusty" correct />,
                        <skoash.ListItem className="hot" data-ref="hot" correct />,
                        <skoash.ListItem className="no-water" data-ref="no-water" correct />,
                        <skoash.ListItem className="thirsty" data-ref="thirsty" correct />,
                        <skoash.ListItem className="wet" data-ref="incorrect" />,
                        <skoash.ListItem className="tropical" data-ref="incorrect" />,
                        <skoash.ListItem className="arid" data-ref="arid" correct />,
                        <skoash.ListItem className="steamy" data-ref="incorrect" />,
                        <skoash.ListItem className="balmy" data-ref="incorrect" />,
                        <skoash.ListItem className="swampy" data-ref="incorrect" />,
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
