export default function (props, ref, key, opts = {}) {
    var renderAudio = function () {
        if (!opts.vo) return null;
    };

    var renderImage = function () {
        if (!opts.image) return null;
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={opts.id}
            className={opts.className}
        >
            {renderAudio()}
            {renderImage()}
            <div className="frame">
                {opts.content}
            </div>
        </skoash.Screen>
    );
}
