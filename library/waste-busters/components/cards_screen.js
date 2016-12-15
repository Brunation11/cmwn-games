export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="cards"
        >
            <skoash.Image
                className="hidden"
                src={MEDIA.SPRITE + 'cards.1.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.SPRITE + 'cards.2.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.SPRITE + 'cards.3.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.SPRITE + 'cards.4.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.IMAGE + 'card.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.IMAGE + 'cards.trash.png'}
            />
        </skoash.Screen>
    );
}
