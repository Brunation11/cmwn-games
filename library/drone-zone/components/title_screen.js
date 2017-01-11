export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
        >
            <skoash.Image className="radar" src={`${MEDIA.IMAGE}title.radar.png`} />
            <skoash.Image className="drone" src={`${MEDIA.IMAGE}title.drone.png`} />
            <skoash.Image className="name" src={`${MEDIA.IMAGE}title.name.png`} />
        </skoash.Screen>
    );
}
