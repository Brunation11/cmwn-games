export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
        >
            <skoash.Sprite
                src={`${MEDIA.SPRITE}starsprite`}
                animate
            />
            <skoash.Sprite
                src={`${MEDIA.SPRITE}crowflyingsprite`}
                animate
            />
            <skoash.Sprite
                src={`${MEDIA.SPRITE}monarchsprite`}
                animate
            />
        </skoash.Screen>
    );
}
