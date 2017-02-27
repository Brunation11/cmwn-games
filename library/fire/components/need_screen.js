import Draggable from 'shared/components/draggable/0.4';
import Dropzone from 'shared/components/dropzone/0.4';

class NeedScreenComponent extends skoash.Screen {
    open() {
        var componentParent;

        super.open();

        this.checkComplete = null;
        this.refs['media-vos'].incompleteRefs();
        componentParent = _.get(this.refs, 'children-3.refs.children-0', null);
        if (componentParent) {
            componentParent.refs['draggables-left'].incompleteRefs();
            componentParent.refs['draggables-right'].incompleteRefs();
        }
        this.incomplete();
        this.checkComplete = super.checkComplete;
    }
}

export default function (props, ref, key) {
    const ANSWERS = [
        'pants',
        'jacket',
        'hood',
        'boots',
        'mask',
        'gloves',
        'tank',
        'walkie',
        'axe',
        'light',
        'camera',
        'punch',
    ];

    const OBJECTS = [
        'bun',
        'tank',
        'body',
        'boots',
        'pants',
        'jacket',
        'gloves',
        'mask',
        'straps',
        'light',
        'axe',
        'walkie',
        'camera',
        'punch',
    ];

    var gender = _.get(props, 'gameState.data.character.gender', 'female');
    var skin = _.get(props, 'gameState.data.character.skin', 'medium');

    var openReveal = function (dropped) {
        var droppedList = _.get(props, 'data.dropzone.droppedList', '');
        var droppedMsg = 'dropped-' + dropped.props.message;
        this.updateScreenData({
            key: 'dropzone',
            data: {
                message: dropped.props.message,
                droppedList: droppedList + ' ' + droppedMsg
            }
        });
    };

    var mediaComplete = function () {
        this.updateScreenData({
            key: 'media',
            data: {
                complete: 'complete'
            }
        });
    };

    return (
        <NeedScreenComponent
            {...props}
            ref={ref}
            key={key}
            className={skin + ' ' + gender}
            id="need"
        >
            <skoash.MediaSequence ref="media-sequence">
                <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-imagine-yourea-firefighter.mp3`} />
                <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-drag-and-drop-to-outfit.mp3`} />
            </skoash.MediaSequence>
            <skoash.MediaCollection
                ref="media-vos"
                play={_.get(props, 'data.dropzone.message', null)}
                onComplete={mediaComplete}
            >
                <skoash.Audio
                    type="voiceOver"
                    data-ref="pants"
                    src={`${CMWN.MEDIA.VO}vo-turnout-pants.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="jacket"
                    src={`${CMWN.MEDIA.VO}vo-turnout-jacket.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="hood"
                    src={`${CMWN.MEDIA.VO}vo-carbon-flash-hood.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="boots"
                    src={`${CMWN.MEDIA.VO}vo-chemical-proof-boots.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="mask"
                    src={`${CMWN.MEDIA.VO}vo-helmet-visor.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="gloves"
                    src={`${CMWN.MEDIA.VO}vo-safety-gloves.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="tank"
                    src={`${CMWN.MEDIA.VO}vo-tank-of-oxygen.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="axe"
                    src={`${CMWN.MEDIA.VO}vo-axe.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="walkie"
                    src={`${CMWN.MEDIA.VO}vo-hand-held-radio.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="light"
                    src={`${CMWN.MEDIA.VO}vo-flashlight.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="camera"
                    src={`${CMWN.MEDIA.VO}vo-thermal-imaging.mp3`}
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="punch"
                    src={`${CMWN.MEDIA.VO}vo-window-punch.mp3`}
                />,
            </skoash.MediaCollection>
            <skoash.MediaCollection
                ref="media-sfx"
                play={_.get(props, 'data.media.complete', null)}
            >
                <skoash.Audio data-ref="complete" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-12-3.mp3`} />,
            </skoash.MediaCollection>
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-12-1.png`} />
                    <skoash.Repeater
                        className="draggables-left"
                        ref="draggables-left"
                        amount={6}
                        item={<Draggable returnOnIncorrect />}
                        props={ANSWERS.slice(0, 6).map((value) => { return {message: value}; })}
                    />
                    <Dropzone
                        ref="dropzone"
                        dropped={_.get(props, 'data.draggable.dropped')}
                        dragging={_.get(props, 'data.draggable.dragging')}
                        onCorrect={openReveal}
                        dropzones={[
                            <skoash.Repeater
                                className={_.get(props, 'data.dropzone.droppedList', null)}
                                amount={16}
                                answers={ANSWERS}
                                props={OBJECTS.map((value) => { return {className: value}; })}
                            />
                        ]}
                        assets={[
                            <skoash.Audio
                                type="sfx"
                                data-ref="correct"
                                src={`${CMWN.MEDIA.EFFECT}s-12-2.mp3`}
                            />,
                            <skoash.Audio
                                type="sfx"
                                data-ref="drag"
                                src={`${CMWN.MEDIA.EFFECT}s-12-1.mp3`}
                            />,
                        ]}
                    />
                    <skoash.Repeater
                        className="draggables-right"
                        ref="draggables-right"
                        amount={6}
                        item={<Draggable returnOnIncorrect />}
                        props={ANSWERS.slice(6).map((value) => { return {message: value}; })}
                    />
                    <skoash.Reveal
                        ref="reveal"
                        openMultiple
                        openReveal={_.get(props, 'data.dropzone.message', null)}
                        list={[
                            <skoash.ListItem data-ref="pants">
                                <p>
                                    Nobody wears shorts in a fire!<br /> You need these!
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="jacket">
                                <p>
                                    If there is a fire, you<br /> need this special coat.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="hood">
                                <p>
                                    This keeps every bit of<br /> your head protected.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="boots">
                                <p>
                                    They keep dangerous<br /> chemicals off your feet.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="mask">
                                <p>
                                    This protects your head and face.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="gloves">
                                <p>
                                    Like boots do for your feet,<br /> these protect your hands.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="tank">
                                <p>
                                    This is a can of air<br /> so you can breathe!
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="axe">
                                <p>
                                    This helps you get<br /> through closed doors.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="walkie">
                                <p>
                                    When shouting isn't enough<br /> you need this.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="light">
                                <p>
                                    Could be too dark to see<br /> unless you have this!
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="camera">
                                <p>
                                    Need to see through<br /> darkness and smoke?<br /> This is for you!
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="punch">
                                <p>
                                    This helps you break<br /> through a window.
                                </p>
                            </skoash.ListItem>,
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
        </NeedScreenComponent>
    );
}

