export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
            className="large-frame"
            emitOnComplete={{
                name: 'flip',
            }}
        >
            <skoash.MediaSequence>
                <skoash.Audio
                    type="voiceOver"
                    src="media/S_19/VO_19.1.mp3"
                    completeTarget="vo"
                />
                <skoash.Audio type="sfx" src="media/S_19/S_19.2.mp3" />
            </skoash.MediaSequence>
            <skoash.Component className="frame animated">
                <h3>Thank you.</h3>
                <p>
                    You learned a lot about<br />
                    how to save water!<br />
                    Now lets work together<br />
                    to get the Drought Out.
                </p>
                <skoash.Image
                    className={'animated ' + (_.get(props, 'data.vo.complete') ? 'shaking' : '')}
                    src="media/S_19/img_19.1.png"
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
