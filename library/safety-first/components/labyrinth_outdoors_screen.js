import LabyrinthScreenComponent from './labyrinth_screen_component';

export default function (props, ref, key) {
    return LabyrinthScreenComponent(props, ref, key, {
        id: 'labyrinth-outdoors',
        levelNumber: 1,
        itemsCount: 7,
        disableChance: .75,
        disableInterval: 4000,
        openOnStart: 'instructions',
        img: `${MEDIA.IMAGE}map.01.fullimg.jpg`,
        map: `${MEDIA.IMAGE}map.01.jpg`,
        tips: true,
        goal: 9,
        startX: 140,
        startY: 120,
        vos: [
            <skoash.MediaSequence
                ref="instructions"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-1"
                    type="voiceOver"
                    src={`${MEDIA.VO}UseTheArrowKeys.mp3`}
                />
                <skoash.Audio
                    ref="vo-2"
                    type="voiceOver"
                    src={`${MEDIA.VO}ClickScreen.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="tips"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-3"
                    type="sfx"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-4"
                    type="voiceOver"
                    src={`${MEDIA.VO}TipsPath.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-1"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-5"
                    type="sfx"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-6"
                    type="voiceOver"
                    src={`${MEDIA.VO}LookBothWays.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-2"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-7"
                    type="sfx"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-8"
                    type="voiceOver"
                    src={`${MEDIA.VO}WaitBus.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-3"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-9"
                    type="sfx"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-10"
                    type="voiceOver"
                    src={`${MEDIA.VO}DropBus.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-4"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-11"
                    type="sfx"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-12"
                    type="voiceOver"
                    src={`${MEDIA.VO}PlayOthers.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-5"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-13"
                    type="sfx"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-14"
                    type="voiceOver"
                    src={`${MEDIA.VO}StrangerBelongings.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-6"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-15"
                    type="sfx"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-16"
                    type="voiceOver"
                    src={`${MEDIA.VO}StrangerCar.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-7"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-17"
                    type="sfx"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-18"
                    type="voiceOver"
                    src={`${MEDIA.VO}StrangerGift.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="level-up"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-19"
                    type="sfx"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-20"
                    type="voiceOver"
                    src={`${MEDIA.VO}HomeSafe.mp3`}
                />
            </skoash.MediaSequence>
        ],
        revealList: [
            <skoash.Component
                ref="instructions"
                className="labyrinth-frame instructions"
            >
                <skoash.Image
                    className="wolf"
                    src={`${MEDIA.IMAGE}wolf.fullbody.png`}
                />
                <h1 className="header">
                    Use the arrow keys<br />
                    to move across the map<br />
                    and reveal safety tips.
                </h1>
                <h2 className="sub-header">
                    Click anywhere on the screen to continue.
                </h2>
                <skoash.Image
                    className="nav-arrows"
                    src={`${MEDIA.IMAGE}arrow.keys.png`}
                />
            </skoash.Component>,
            <skoash.Component
                ref="tips"
                className="labyrinth-frame tips tip"
            >
                <skoash.Image
                    className="bush-left"
                    src={`${MEDIA.IMAGE}bush.3.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.2.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${MEDIA.IMAGE}wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${MEDIA.IMAGE}road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${MEDIA.IMAGE}grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-1"
                className="labyrinth-frame item-1 tip"
            >
                <skoash.Image
                    className="bush-left"
                    src={`${MEDIA.IMAGE}bush.3.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.2.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${MEDIA.IMAGE}wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${MEDIA.IMAGE}road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${MEDIA.IMAGE}grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-2"
                className="labyrinth-frame item-2 tip"
            >
                <skoash.Image
                    className="bush-left"
                    src={`${MEDIA.IMAGE}bush.3.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.2.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${MEDIA.IMAGE}wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${MEDIA.IMAGE}road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${MEDIA.IMAGE}grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-3"
                className="labyrinth-frame item-3 tip"
            >
                <skoash.Image
                    className="bush-left"
                    src={`${MEDIA.IMAGE}bush.3.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.2.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${MEDIA.IMAGE}wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${MEDIA.IMAGE}road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${MEDIA.IMAGE}grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-4"
                className="labyrinth-frame item-4 tip"
            >
                <skoash.Image
                    className="bush-left"
                    src={`${MEDIA.IMAGE}bush.3.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.2.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${MEDIA.IMAGE}wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${MEDIA.IMAGE}road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${MEDIA.IMAGE}grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-5"
                className="labyrinth-frame item-5 tip"
            >
                <skoash.Image
                    className="bush-left"
                    src={`${MEDIA.IMAGE}bush.3.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.2.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${MEDIA.IMAGE}wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${MEDIA.IMAGE}road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${MEDIA.IMAGE}grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-6"
                className="labyrinth-frame item-6 tip"
            >
                <skoash.Image
                    className="bush-left"
                    src={`${MEDIA.IMAGE}bush.3.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.2.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${MEDIA.IMAGE}wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${MEDIA.IMAGE}road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${MEDIA.IMAGE}grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-7"
                className="labyrinth-frame item-7 tip"
            >
                <skoash.Image
                    className="bush-left"
                    src={`${MEDIA.IMAGE}bush.3.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.2.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${MEDIA.IMAGE}wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${MEDIA.IMAGE}road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${MEDIA.IMAGE}grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="level-up"
                className="labyrinth-frame level-up tip"
            >
                <skoash.Image
                    className="bush-left"
                    src={`${MEDIA.IMAGE}bush.3.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.2.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${MEDIA.IMAGE}wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${MEDIA.IMAGE}road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${MEDIA.IMAGE}grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>
        ],
    });
}
