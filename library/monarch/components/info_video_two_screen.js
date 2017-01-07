export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-video-two"
        >
            <skoash.Component
                className="video-container"
            >
                {/*
                <skoash.Video
                    src={`${MEDIA.VIDEO}MonarchNewVideo.mov`}
                />
                */}
            </skoash.Component>

        </skoash.Screen>
    );
}
