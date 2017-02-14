export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            hidePrev={true}
        >
            <skoash.Image src={`${MEDIA.SPRITE}safetyfirst_titlescreen_.gif`} />
        </skoash.Screen>
    );
}
