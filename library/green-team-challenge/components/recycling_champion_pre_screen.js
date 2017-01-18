import LevelScreenComponent from './level_screen_component';

export default function (props, ref, key) {
    return LevelScreenComponent(props, ref, key, {
        level: 1,
        earned: false,
    });
}
