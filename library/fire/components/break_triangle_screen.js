export default function (props, ref, key) {
    const ANIMATE = [
        'HEAT',
        'AIR',
        'FUEL'
    ];

    var animate = function () {
        var index = _.get(props, 'data.screen-9.index', 0);
        var open = _.get(props, 'data.screen-9.open', '');
        open += ` ${ANIMATE[index]}`;

        this.updateScreenData({
            key: 'screen-9',
            data: {
                index: index + 1,
                open,
            },
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="break-triangle"
            className={_.get(props, 'data.screen-9.open', null)}
        >
            <skoash.MediaSequence
                ref="audio-sequence"
            >
                <skoash.Audio
                    type="voiceOver"
                    data-ref="title"
                    src={`${CMWN.MEDIA.VO}vo-firefighters-break-the-triangle.mp3`}
                    onComplete={animate}
                />
                <skoash.Audio type="voiceOver"
                    data-ref="heat"
                    src={`${CMWN.MEDIA.VO}vo-heat.mp3`}
                    onComplete={animate}
                />
                <skoash.Audio
                    type="voiceOver"
                    data-ref="air"
                    src={`${CMWN.MEDIA.VO}vo-air.mp3`}
                    onComplete={animate}
                />
                <skoash.Audio
                    type="voiceOver"
                    data-ref="fuel"
                    src={`${CMWN.MEDIA.VO}vo-fuel.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    data-ref="theory"
                    src={`${CMWN.MEDIA.VO}vo-this-is-basic-firefighter-theory.mp3`}
                />
            </skoash.MediaSequence>
            <p>
                Firefighters break the triangle by removing<br /> one of more these three sides.
            </p>
            <skoash.Component className="animated images">
                <skoash.Image
                    className="animated fuel"
                    src={`${CMWN.MEDIA.IMAGE}img-8-10b.png`}
                />
                <skoash.Image
                    className="animated fuel side"
                    data-ref="fuelSide"
                    src={`${CMWN.MEDIA.IMAGE}img-8-10g.png`}
                />
                <skoash.Image
                    className="animated heat"
                    src={`${CMWN.MEDIA.IMAGE}img-8-10c.png`}
                />
                <skoash.Image
                    className="animated heat side"
                    data-ref="heatSide"
                    src={`${CMWN.MEDIA.IMAGE}img-8-10f.png`}
                />
                <skoash.Image
                    className="animated air"
                    src={`${CMWN.MEDIA.IMAGE}img-8-10d.png`}
                />
                <skoash.Image
                    className="animated air side"
                    data-ref="airSide"
                    src={`${CMWN.MEDIA.IMAGE}img-8-10h.png`}
                />
                <skoash.Image
                    className="animated triangle"
                    src={`${CMWN.MEDIA.IMAGE}img-8-10e.png`}
                />
            </skoash.Component>
            <h2>
                This is basic firefighter theory!
            </h2>
        </skoash.Screen>
    );
}

