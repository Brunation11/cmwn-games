const src = 'http://res.cloudinary.com/changemyworldnow/' +
            'video/upload/v1485551205/Drone_Zone_FINAL_FOR_UPLOAD_cv4prl.mov';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video-the-world-of-drones"
        >
            <h1 className="header">THE WORLD OF DRONES</h1>

            <skoash.Component className="frame video">
                <skoash.Video className="video" src={src} />
            </skoash.Component>
        </skoash.Screen>
    );
}
