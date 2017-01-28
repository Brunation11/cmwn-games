// const src = '';

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
                {/*
                <skoash.Video src={src} />
                */}
            </skoash.Component>
        </skoash.Screen>
    );
}
