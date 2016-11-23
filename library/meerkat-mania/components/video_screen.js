const src = 'https://res.cloudinary.com/changemyworldnow/video/upload/' +
    'af_44100/v1460413987/Meerkat_Revision_Final_cjuf1q.mp4';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video"
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
