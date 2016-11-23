const src = 'https://res.cloudinary.com/changemyworldnow/video/upload/v1455033910/MeerkatMove_ovuzka.mp4';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video-2"
            startDelay={0}
        >
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Video src={src} />
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
