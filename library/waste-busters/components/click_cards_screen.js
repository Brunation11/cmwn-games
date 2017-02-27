export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="click-cards"
        >
            <skoash.Audio
                type="voiceOver"
                src={MEDIA.VO + 'ClickTheCards.mp3'}
            />
            <skoash.Image
                className="frame"
                src={MEDIA.IMAGE + 'frame.square.png'}
            />
            <skoash.Image
                className="recycle"
                src={MEDIA.IMAGE + 'recycle.transparency.png'}
            />
            <skoash.Image
                className="trash"
                src={MEDIA.IMAGE + 'cards.trash.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.SPRITE + 'game1.4.png'}
            />
            <div className="turtle" />
            <p>
                Click the cards<br/>
                to find out how<br/>
                YOU can be a<br/>
                Waste Buster!
            </p>
        </skoash.Screen>
    );
}
