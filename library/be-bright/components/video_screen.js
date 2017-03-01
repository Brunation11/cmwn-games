const src = 'https://res.cloudinary.com/changemyworldnow/video/upload/v1455037011/' +
    'Be_Bright_112015_DM_480p_ghb6vh_summbp.mp4';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video-screen"
        >
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}fr-2.png`} />
            <skoash.Component ref="center" className="center">
                <skoash.Component ref="frame" className="frame video">
                    <skoash.Video ref="video" src={src} />
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
