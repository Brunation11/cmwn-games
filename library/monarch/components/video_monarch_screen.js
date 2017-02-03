// const SRC = 'https://res.cloudinary.com/changemyworldnow/video/upload/' +
//     'v1486138208/Monarch_Transformation_fmbavs.mp4';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video-monarch"
        >
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}NextGeneration.mp3`}
            />

            <skoash.Component className="video-container">
                {/*
                <skoash.Video
                    src={SRC}
                />
                */}
            </skoash.Component>

            <skoash.Component className="copy-container">
                <span className="copy">
                    Ten days later, the
                    <br />
                    butterfly emerges from the
                    <br />
                    pupa! It will now live off
                    <br />
                    of the nectar of flowers
                    <br />
                    and help produce the
                    <br />
                    next generation.
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
