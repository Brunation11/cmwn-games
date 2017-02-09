export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
        >
            <skoash.Image
                src={CMWN.MEDIA.IMAGE + 'PLTlogo.png'}
                className="logo"
            />
            <skoash.Image
                src={CMWN.MEDIA.IMAGE + 'title.png'}
                className="title"
            />
        </skoash.Screen>
    );
}
