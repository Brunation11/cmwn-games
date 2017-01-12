export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
        >
            <h3>Title Screen</h3>
        </skoash.Screen>
    );
}
