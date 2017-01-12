export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
        >
            <h3>Flip Screen</h3>
        </skoash.Screen>
    );
}
