import events from './events';
import makeBackground from './make_background';
import makeItems from './make_items';

export default {
    emitData() {
        //  emit event with data to skoash game
        this.emitEvent({
            updateGameState: {
                path: ['game'],
                data: this.data
            }
        });
    },
    ...events,
    makeBackground,
    makeItems,
};
