export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="alarm"
            onComplete={() => {
                skoash.trigger('goto', {
                    index: props.index + 1,
                });
            }}
        >
            <skoash.MediaSequence ref="media-sequence">
                <skoash.Audio ref="title" type="voiceOver" src="media/S_5/vo_FireBreaksOut.mp3" />
                <skoash.Audio ref="directions" type="voiceOver" src="media/S_5/vo_ClickAndShowYouKnow.mp3" />
            </skoash.MediaSequence>
            <p>Click and show you know.</p>
            <skoash.Image className="animated" src="media/S_5/img_5.1.png" />
            <skoash.Image className="animated" src="media/S_5/img_5.2.png" />
            <skoash.Image className="animated" src="media/S_1/img_1.1.png" />
            <skoash.MediaCollection
                ref="media-collection"
                play={_.get(props, 'data.selectable.target.props.data-ref', null)}
            >
                <skoash.Audio data-ref="alarm-sound" type="sfx" src="media/S_5/S_5.1.mp3"/>
            </skoash.MediaCollection>
            <skoash.Selectable
                ref="selectable"
                dataTarget="selectable"
                list={[
                    <skoash.Component
                        data-ref="alarm-sound"
                        className="push-down"
                        correct
                    />
                ]}
            />
        </skoash.Screen>
    );
}
