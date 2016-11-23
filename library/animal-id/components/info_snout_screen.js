import _ from 'lodash';

export default function (props, ref, key) {
    var snout;
    var schnoz;
    var sniffer;
    var snuffer;
    var whiffer;
    var snoot;

    snout = 'animated' + (_.get(props, 'data.snout.playing') ? ' animate' : '');
    schnoz = 'animated' + (_.get(props, 'data.schnoz.playing') ? ' animate' : '');
    sniffer = 'animated' + (_.get(props, 'data.sniffer.playing') ? ' animate' : '');
    snuffer = 'animated' + (_.get(props, 'data.snuffer.playing') ? ' animate' : '');
    whiffer = 'animated' + (_.get(props, 'data.whiffer.playing') ? ' animate' : '');
    snoot = 'animated' + (_.get(props, 'data.snoot.playing') ? ' animate' : '');

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-snout"
        >
            <skoash.MediaSequence>
                <skoash.Audio
                    type="voiceOver"
                    src="media/audio/VO_14-1.mp3"
                    sprite={[0, 4500]}
                />
                <skoash.Audio
                    playTarget="snout"
                    type="voiceOver"
                    src="media/audio/VO_14-1.mp3"
                    sprite={[4500, 1500]}
                />
                <skoash.Audio
                    playTarget="schnoz"
                    type="voiceOver"
                    src="media/audio/VO_14-1.mp3"
                    sprite={[6000, 1500]}
                />
                <skoash.Audio
                    playTarget="sniffer"
                    type="voiceOver"
                    src="media/audio/VO_14-1.mp3"
                    sprite={[7500, 1250]}
                />
                <skoash.Audio
                    playTarget="snuffer"
                    type="voiceOver"
                    src="media/audio/VO_14-1.mp3"
                    sprite={[8750, 1000]}
                />
                <skoash.Audio
                    playTarget="whiffer"
                    type="voiceOver"
                    src="media/audio/VO_14-1.mp3"
                    sprite={[9750, 1250]}
                />
                <skoash.Audio
                    playTarget="snoot"
                    type="voiceOver"
                    src="media/audio/VO_14-1.mp3"
                    sprite={[11000, 1750]}
                />
            </skoash.MediaSequence>
            <skoash.Component>
                <skoash.Image ref="banner" className="banner-1 animated" src="media/images/img_14.1.png" />
                <h2>That's right</h2>
                <skoash.Image ref="banner-2" className="banner-2 animated" src="media/images/img_14.3.png" />
                <span className={snout}></span>
                <span className={schnoz}></span>
                <span className={sniffer}></span>
                <span className={snuffer}></span>
                <span className={whiffer}></span>
                <span className={snoot}></span>
            </skoash.Component>
        </skoash.Screen>
    );
}
