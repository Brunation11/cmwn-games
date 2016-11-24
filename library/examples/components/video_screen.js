const src = 'https://res.cloudinary.com/changemyworldnow/video/upload/v1455037011/' +
    'Be_Bright_112015_DM_480p_ghb6vh_summbp.mp4';

var VideoScreen = (
    <skoash.Screen
        id="video-screen"
    >
        <skoash.Component ref="center" className="center">
            <skoash.Component ref="frame" className="frame video">
                <skoash.Video ref="video" src={src} />
            </skoash.Component>
        </skoash.Component>
    </skoash.Screen>
);

export default VideoScreen;
