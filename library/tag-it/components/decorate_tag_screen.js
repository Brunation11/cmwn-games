export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="decorate-tag"
        >
            <skoash.MediaSequence
               ref="audio-sequence"
               checkComplete={true}
            >
                <skoash.Audio
                    ref="notice"
                    type="sfx"
                    src="media/_audio/_Reveals/TI_RV_7.mp3" pl-required preload="none"
                />
                <skoash.Audio
                    type="voiceOver"
                    src="media/_audio/S_DecorateTag/VO_NowYou.mp3"
                />
            </skoash.MediaSequence>
            <p>
                Now you are ready<br />
                to decorate your tag!<br /><br />
                Be sure to layer old<br />
                newspapers on your<br />
                work-space so you don't<br />
                make a mess!
            </p>
            <skoash.Image
                ref="image"
                className="animated"
                src="media/_images/S_ScissorsAndPaint/img_10.1.png"
            />
        </skoash.Screen>
    );
}

