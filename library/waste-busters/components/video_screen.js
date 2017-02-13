const SRC = 'https://res.cloudinary.com/changemyworldnow/video/upload/' +
    'v1486567397/WasteBusters_Final_For_Upload_ervtvn.mp4';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video"
        >
            <skoash.Image src={`${CMWN.MEDIA.IMAGE}frame.intro.video.png`} />
            <skoash.Video src={SRC} />
        </skoash.Screen>
    );
}
