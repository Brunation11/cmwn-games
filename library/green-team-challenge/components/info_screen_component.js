export default function (props, ref, key, opts = {}) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={opts.id}
            className={opts.className}
        >
            <div className="frame">
                <div className="content">{opts.content}</div>
            </div>
        </skoash.Screen>
    );
}
