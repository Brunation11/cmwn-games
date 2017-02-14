import LabyrinthScreenComponent from './labyrinth_screen_component';

export default function (props, ref, key) {
    return LabyrinthScreenComponent(props, ref, key, {
        id: 'labyrinth-indoors',
        levelNumber: 1,
        itemsCount: 8,
        disableChance: .75,
        disableInterval: 4000,
        openOnStart: 'instructions',
        img: `${MEDIA.IMAGE}map.02.fullimg.jpg`,
        map: `${MEDIA.IMAGE}map.02.jpg`,
        goal: 9,
        startX: 820,
        startY: 287,
        vos: [
            <skoash.MediaSequence
                ref="instructions"
                silentOnStart={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}HomeIntro.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}ClickScreen.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-1"
                silentOnStart={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}BrokenGlass.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-2"
                silentOnStart={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}Bottles.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-3"
                silentOnStart={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}NameAddress.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-4"
                silentOnStart={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}ElectricalWires.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-5"
                silentOnStart={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}Pills.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-6"
                silentOnStart={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}911.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-7"
                silentOnStart={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}SmokeAlarm.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="item-8"
                silentOnStart={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                {/*
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}`}
                />
                */}
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="level-up"
                silentOnStart={true}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}MapGame.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}GoodJob.mp3`}
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
                    src={`${MEDIA.IMAGE}house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.png`}
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
                    className="house"
                    src={`${MEDIA.IMAGE}house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.png`}
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
                    className="house"
                    src={`${MEDIA.IMAGE}house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.png`}
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
                    className="house"
                    src={`${MEDIA.IMAGE}house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.png`}
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
                    className="house"
                    src={`${MEDIA.IMAGE}house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.png`}
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
                    className="house"
                    src={`${MEDIA.IMAGE}house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.png`}
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
                    className="house"
                    src={`${MEDIA.IMAGE}house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.png`}
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
                ref="item-8"
                className="labyrinth-frame item-8 tip"
            >
                <skoash.Image
                    className="house"
                    src={`${MEDIA.IMAGE}house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.png`}
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
                    className="house"
                    src={`${MEDIA.IMAGE}house.png`}
                />
                <skoash.Image
                    className="bush-right"
                    src={`${MEDIA.IMAGE}bush.png`}
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
