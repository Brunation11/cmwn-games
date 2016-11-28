export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            hidePrev={true}
        >
            <skoash.Image src={ENVIRONMENT.MEDIA + 'SpritesAnimations/safetyfirst_titlescreen_.gif'} />
        </skoash.Screen>
    );
}
