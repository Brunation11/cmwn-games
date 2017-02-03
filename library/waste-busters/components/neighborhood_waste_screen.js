export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="neighborhood-waste"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'identifywaste.mp3'}
            />
            <div className="tree-3" />
            <div className="tree-4" />
            <skoash.Image
                className="turtle"
                src={CMWN.MEDIA.IMAGE + 'main.turtle.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'cards.4.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'frame.round.png'}
            />
            <div className="frame round">
                <div className="content">
                    Now that the<br/>
                    neighborhood waste<br/>
                    has been picked up, let's<br/>
                    identify the different<br/>
                    types of waste!
                </div>
            </div>
        </skoash.Screen>
    );
}
