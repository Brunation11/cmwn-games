export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            checkComplete={false}
            completeDelay={2000}
            completeOnStart
        >
            <skoash.Image class="animated" src="media/S_1/img_1.1.png" />
        </skoash.Screen>
    );
}
