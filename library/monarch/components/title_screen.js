export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
        >
            <skoash.Sprite
                className="star"
                src={`${MEDIA.SPRITE}starsprite`}
                frame={4}
                animate
            />
        </skoash.Screen>
    );
}
