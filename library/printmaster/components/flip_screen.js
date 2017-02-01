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
                    src="media/S_22/VO_22.1.mp3"
                    sprite={[0, 2000]}
                    completeTarget="vo"
                />
                <skoash.Audio
                    type="voiceOver"
                    src="media/S_22/VO_22.1.mp3"
                    sprite={[2000, 4000]}
                />
            </skoash.MediaSequence>
            <skoash.Image className="hidden" src="media/_Frame/Fr_1.png" />
            <skoash.Image className="hidden" src="media/S_22/img_22.1.png" />
            <div className="frame">
                <div>
                    <p>
                        You've just fingerprinted your way<br/>
                        to a brand new
                    </p>
                    <div className={'flip' +
                        (_.get(props, 'data.vo.complete') ? ' animated' : '')}>
                        <div className="animated" />
                        <div className="animated" />
                        <div className="animated" />
                        <div className="animated" />
                    </div>
                </div>
            </div>

        </skoash.Screen>
    );
}
