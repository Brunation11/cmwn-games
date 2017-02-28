import MediaCollection from 'shared/components/media_collection/0.1';
import Selectable from 'shared/components/selectable/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="feel"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-6-11.mp3`} />
            <skoash.Audio ref="start" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-6-1.mp3`} />
            <MediaCollection
                play={_.get(props, 'data.selection.target', null)}
                onPlay={function () {
                    this.media.correct.play();

                    this.updateGameState({
                        path: 'selection',
                        data: {
                            target: null
                        }
                    });
                }}
            >
                <skoash.Audio
                    ref="correct"
                    type="sfx"
                    src={`${CMWN.MEDIA.VO}s-6-2.mp3`}
                />
                <skoash.Audio
                    ref="safe"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-6-1.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="loved"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-6-2.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="supported"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-6-3.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="important"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-6-4.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="included"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-6-5.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="valued"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-6-6.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="grateful"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-6-7.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="happy"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-6-8.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="secure"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-6-9.mp3`}
                    complete
                />
                <skoash.Audio
                    ref="worthwhile"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-6-10.mp3`}
                    complete
                />
            </MediaCollection>
            <skoash.Component className="frame">
                <skoash.Image src={`${CMWN.MEDIA.IMAGE}img-6-1.png`} />
                <Selectable
                    selectClass="HIGHLIGHTED"
                    selectRespond={function (target) {
                        this.updateGameState({
                            path: 'selection',
                            data: {
                                target
                            }
                        });
                    }}
                    list={[
                        <li data-ref="safe" />,
                        <li data-ref="loved" />,
                        <li data-ref="supported" />,
                        <li data-ref="important" />,
                        <li data-ref="included" />,
                        <li data-ref="valued" />,
                        <li data-ref="grateful" />,
                        <li data-ref="happy" />,
                        <li data-ref="secure" />,
                        <li data-ref="worthwhile" />,
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
