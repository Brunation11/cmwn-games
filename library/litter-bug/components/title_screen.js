export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            hidePrev
            completeDelay={5000}
        >
        </skoash.Screen>
    );
}
