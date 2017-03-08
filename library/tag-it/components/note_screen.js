export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="note"
        >
            <skoash.Audio ref="note" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-note-w-n.mp3`} />
            <div className="tip hint">
                <p>
                    Note: Paint, polish and markers must be waterproof.
                </p>
            </div>
        </skoash.Screen>
    );
}

