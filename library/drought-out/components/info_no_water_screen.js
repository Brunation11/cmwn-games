export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-no-water"
            className="large-frame"
            restartBackground
        >
            <skoash.MediaSequence>
                <skoash.Audio
                    ref="vo"
                    type="voiceOver"
                    src={`${MEDIA.VO}WhenThere.mp3`}
                    delay={6500}
                    completeTarget="vo"
                />
                <skoash.Audio
                    ref="stamp"
                    type="sfx"
                    src={`${MEDIA.EFFECT}Stamp.mp3`}
                />
            </skoash.MediaSequence>
            <skoash.Image className="hidden" src={`${MEDIA.IMAGE}FR_4.png`}/>
            <skoash.Component className="frame animated">
                <p>
                    When there is less rain and snow<br/>
                    consistently over a period of years,<br/>
                    it causes drought.
                </p>
                <skoash.Image
                    id="stamp-img"
                    className={'animated ' + (_.get(props, 'data.vo.complete') ? 'TRANSLATE' : '')}
                    src={`${MEDIA.IMAGE}img_3.1.png`}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}

