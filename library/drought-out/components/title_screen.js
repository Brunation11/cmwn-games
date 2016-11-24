export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            checkComplete={false}
            completeDelay={3000}
            completeOnStart={true}
        >
            <skoash.Image className="animated" src="media/S_1/img_1.1.png" />
        </skoash.Screen>
    );
}
