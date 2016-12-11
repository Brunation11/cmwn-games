import LabyrinthScreenComponent from './labyrinth_screen_component';

export default function (props, ref, key) {
    return LabyrinthScreenComponent(props, ref, key, {
        id: 'labyrinth-indoors',
        levelNumber: 1,
        itemsCount: 7,
        disableChance: .75,
        disableInterval: 4000,
        openOnStart: 'instructions',
        img: `${ENVIRONMENT.MEDIA}ImageAssets/map.02.fullimg.jpg`,
        map: `${ENVIRONMENT.MEDIA}ImageAssets/map.02.jpg`,
        goal: 8,
        startX: 820,
        startY: 287,
        vos: [
            <skoash.MediaSequence
                ref="instructions"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-1"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/HomeIntro.mp3`}
                />
                <skoash.Audio
                    ref="vo-2"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/ClickScreen.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-1"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-5"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-6"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/BrokenGlass.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-2"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-7"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-8"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/Bottles.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-3"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-9"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-10"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/NameAddress.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-4"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-11"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-12"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/ElectricalWires.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-5"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-13"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-14"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/Pills.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-6"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-15"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-16"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/911.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-7"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-17"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-18"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/SmokeAlarm.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="level-up"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-5"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/MapGame.mp3`}
                />
                <skoash.Audio
                    ref="vo-6"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/GoodJob.mp3`}
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
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/wolf.fullbody.png`}
                />
                <h1 className="header">
                    Now that you've learned<br />
                    to stay safe outside,<br />
                    let's take a look inside your home.
                </h1>
                <h2 className="sub-header">
                    Click anywhere on the screen to continue.
                </h2>
            </skoash.Component>,
            <skoash.Component
                ref="item-1"
                className="labyrinth-frame item-1 tip"
            >
                <skoash.Image
                    className="house"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/bush.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-2"
                className="labyrinth-frame item-2 tip"
            >
                <skoash.Image
                    className="house"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/bush.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-3"
                className="labyrinth-frame item-3 tip"
            >
                <skoash.Image
                    className="house"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/bush.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-4"
                className="labyrinth-frame item-4 tip"
            >
                <skoash.Image
                    className="house"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/bush.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-5"
                className="labyrinth-frame item-5 tip"
            >
                <skoash.Image
                    className="house"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/bush.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-6"
                className="labyrinth-frame item-6 tip"
            >
                <skoash.Image
                    className="house"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/bush.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="item-7"
                className="labyrinth-frame item-7 tip"
            >
                <skoash.Image
                    className="house"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/bush.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>,
            <skoash.Component
                ref="level-up"
                className="labyrinth-frame level-up tip"
            >
                <skoash.Image
                    className="house"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/bush.png`}
                />
                <skoash.Image
                    className="wolf"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/wolf.fullbody.png`}
                />
                <skoash.Image
                    className="sign"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/road.sign.png`}
                />
                <skoash.Image
                    className="grass"
                    src={`${ENVIRONMENT.MEDIA}ImageAssets/grass.png`}
                />
                <skoash.Component className="content" />
            </skoash.Component>
        ],
    });
}
