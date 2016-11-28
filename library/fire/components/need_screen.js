import Draggable from 'shared/components/draggable/0.1';
import DropzoneReveal from 'shared/components/dropzone_reveal/0.1';

class NeedScreenComponent extends skoash.Screen {

    getRefs(currentRef) {
        if (!currentRef.refs) {
            return;
        }
        _.each(currentRef.refs, (ref, key) => {
            this.refs[key] = ref;
            if (key.includes('children')) {
                this.getRefs(ref);
            }
        });
    }

    bootstrap() {
        var ref;
        var self = this;
        super.bootstrap();

        ref = self.refs['children-1'];
        if (ref) {
            self.getRefs(ref);
        }
    }

    open() {
        super.open();

        this.checkComplete = null;
        this.refs['dropzone-reveal'].incompleteRefs();
        this.incomplete();
        this.checkComplete = super.checkComplete;
    }
}

export default function (props, ref, key) {
    var data = skoash.trigger('getState').data;
    var skin;
    var gender;
    if (data.character) {
        skin = data.character.gender;
        gender = data.character.skin;
    }
    return (
        <NeedScreenComponent
            {...props}
            ref={ref}
            key={key}
            className={skin + ' ' + gender}
            id="need"
        >
            <skoash.MediaSequence ref="media-sequence">
                <skoash.Audio type="voiceOver" src="media/S_12/vo_ImagineYoureAFirefighter.mp3" />
                <skoash.Audio type="voiceOver" src="media/S_12/vo_DragAndDropToOutfit.mp3" />
            </skoash.MediaSequence>
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Image className="animated" src="media/S_12/img_12.1.png" />
                    <DropzoneReveal
                        ref="dropzone-reveal"
                        assets={[
                            <skoash.Audio data-ref="complete" type="sfx" src="media/S_12/S_12.3.mp3" />,
                        ]}
                        dropzoneDraggablesLeft={[
                            <Draggable message="pants" />,
                            <Draggable message="jacket" />,
                            <Draggable message="hood" />,
                            <Draggable message="boots" />,
                            <Draggable message="mask" />,
                            <Draggable message="gloves" />,
                        ]}
                        dropzoneDraggablesRight={[
                            <Draggable message="tank" />,
                            <Draggable message="walkie" />,
                            <Draggable message="axe" />,
                            <Draggable message="light" />,
                            <Draggable message="camera" />,
                            <Draggable message="punch" />,
                        ]}
                        dropzoneAssets={[
                            <skoash.Audio type="sfx" data-ref="correct" src="media/S_12/S_12.2.mp3" />,
                            <skoash.Audio type="sfx" data-ref="drag" src="media/S_12/S_12.1.mp3" />,
                        ]}
                        dropzones={[
                            <skoash.Component
                              className="body"
                              answers={[
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
                              ]}
                            >
                                <div className="bun" />
                                <div className="tank" />
                                <div className="body" />
                                <div className="boots" />
                                <div className="hood" />
                                <div className="pants" />
                                <div className="jacket" />
                                <div className="gloves" />
                                <div className="mask" />
                                <div className="straps" />
                                <div className="light" />
                                <div className="axe" />
                                <div className="walkie" />
                                <div className="camera" />
                                <div className="punch" />
                            </skoash.Component>
                        ]}
                        revealList={[
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
                        revealAssets={[
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="pants"
                                src="media/S_12/vo_TurnoutPants.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="jacket"
                                src="media/S_12/vo_TurnoutJacket.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="hood"
                                src="media/S_12/vo_CarbonFlashHood.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="boots"
                                src="media/S_12/vo_ChemicalProofBoots.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="mask"
                                src="media/S_12/vo_HelmetVisor.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="gloves"
                                src="media/S_12/vo_SafetyGloves.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="tank"
                                src="media/S_12/vo_TankOfOxygen.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="axe"
                                src="media/S_12/vo_Axe.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="walkie"
                                src="media/S_12/vo_HandHeldRadio.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="light"
                                src="media/S_12/vo_Flashlight.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="camera"
                                src="media/S_12/vo_ThermalImaging.mp3"
                            />,
                            <skoash.Audio
                                type="voiceOver"
                                data-ref="punch"
                                src="media/S_12/vo_WindowPunch.mp3"
                            />,
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
        </NeedScreenComponent>
    );
}

