const src = 'https://res.cloudinary.com/changemyworldnow/video/upload/af_44100/' +
    'v1455037044/sea-turtle-vid_2.1_ovvtfq.mp4';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video"
        >
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Component className="video">
                        <skoash.Video
                            ref="video"
                            src={src}
                        />
                    </skoash.Component>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
