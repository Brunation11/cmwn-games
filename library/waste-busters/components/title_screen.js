export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
        >
            <skoash.Image
                src={MEDIA.IMAGE + 'title.png'}
                className="title"
            />
            <skoash.Image
                src={MEDIA.IMAGE + 'PLTlogo.png'}
                className="logo"
            />
        </skoash.Screen>
    );
}
