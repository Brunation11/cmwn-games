import LevelScreenComponent from './level_screen_component';

export default function (props, ref, key) {
    return LevelScreenComponent(props, ref, key, {
        level: 2,
        earned: false,
    });
}
