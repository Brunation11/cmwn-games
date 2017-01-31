import classNames from 'classnames';

const CHARACTER = `${CMWN.MEDIA.IMAGE}greenteamcharac.png`;
const FRAME = `${CMWN.MEDIA.FRAME}frame.01.png`;

let renderAudio = function (opts) {
    if (!opts.vo) return null;

    return (
        <skoash.Audio
            type="voiceOver"
            src={`${CMWN.MEDIA.VO}${opts.vo}.mp3`}
        />
    );
};

let renderImage = function (opts) {
    if (opts.renderImage === false) return null;

    return (
        <skoash.Image className="character" src={opts.image || CHARACTER} />
    );
};

export default function (props, ref, key, opts = {}) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={opts.id}
            className={classNames('info', opts.className)}
        >
            {renderAudio(opts)}
            {renderImage(opts)}
            <skoash.Image className="hidden" src={FRAME} />
            <div className="frame">
                {opts.content}
            </div>
            <skoash.Compoent
                checkComplete={false}
                complete={true}
                children={[].concat(opts.extras || [])}
            />
        </skoash.Screen>
    );
}
