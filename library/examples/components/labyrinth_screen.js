import Labyrinth from 'shared/components/labyrinth/0.1';
import DPad from 'shared/components/d_pad/0.1';
import IteractiveItem from 'shared/components/interactive_item/0.1';

export default function (props, ref, key) {
    var itemInteract;
    var getItemClassNames;
    var enemyInteract;
    var getEnemyClassNames;

    const PLAYER = 'player';

    itemInteract = function () {
        this.complete();
        this.disable();
        this.setState({
            caught: true,
        });
    };

    getItemClassNames = function () {
        return {CAUGHT: this.state.caught};
    };

    enemyInteract = function () {
        this.setState({
            hit: true,
        }, () => {
            setTimeout(() => {
                this.setState({
                    hit: false
                });
            }, 1000);
        });
    };

    getEnemyClassNames = function () {
        return {HIT: this.state.hit};
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="labyrinth-screen"
        >
            <Labyrinth
                img="media/labyrinth/map.png"
                map="media/labyrinth/map.png"
                input={_.get(props, 'data.d-pad', {})}
                startX={100}
                startY={150}
                scale={_.get(props, 'gameState.scale', 1)}
                onReady={function () {
                    setInterval(() => {
                        var offset = this[PLAYER].getBoundingClientRect();
                        _.each(this.enemies, enemy => {
                            if (this.doIntersect(this.state.playerX, this.state.playerY, offset, enemy)) {
                                return;
                            }
                            Math.random() < .5 ? enemy.disable() : enemy.enable();
                        });
                    }, 2000);
                }}
                items={[
                    <IteractiveItem
                    className="item-1"
                    checkComplete={false}
                    onInteract={itemInteract}
                    getClassNames={getItemClassNames}
                  />,
                    <IteractiveItem
                    className="item-2"
                    checkComplete={false}
                    onInteract={itemInteract}
                    getClassNames={getItemClassNames}
                  />,
                    <IteractiveItem
                    className="item-3"
                    checkComplete={false}
                    onInteract={itemInteract}
                    getClassNames={getItemClassNames}
                  />,
                ]}
                enemies={[
                    <IteractiveItem
                    className="enemy-1"
                    onInteract={enemyInteract}
                    getClassNames={getEnemyClassNames}
                  />,
                    <IteractiveItem
                    className="enemy-2"
                    onInteract={enemyInteract}
                    getClassNames={getEnemyClassNames}
                  />,
                    <IteractiveItem
                    className="enemy-3"
                    onInteract={enemyInteract}
                    getClassNames={getEnemyClassNames}
                  />,
                ]}
            />
            <DPad />
        </skoash.Screen>
    );
}
