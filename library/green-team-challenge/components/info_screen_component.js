import classNames from 'classnames';

const CHARACTER = `${CMWN.MEDIA.IMAGE}greenteamcharac.png`;
const FRAME = `${CMWN.MEDIA.FRAME}frame.01.png`;

export default function (props, ref, key, opts = {}) {
    var renderAudio = function () {
        if (!opts.vo) return null;

        return (
            <skoash.Audio
                type="voiceOver"
                src={`${CMWN.MEDIA.VO}${opts.vo}.mp3`}
            />
        );
    };

    var renderImage = function () {
        if (opts.renderImage === false) return null;

        return (
            <skoash.Image className="character" src={CHARACTER} />
        );
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={opts.id}
            className={classNames('info', opts.className)}
        >
            {renderAudio()}
            {renderImage()}
            <skoash.Image className="hidden" src={FRAME} />
            <div className="frame">
                {opts.content}
            </div>
        </skoash.Screen>
    );
}
