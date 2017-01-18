import ManualDropper from 'shared/components/manual_dropper/0.1';
import Carousel from 'shared/components/carousel/0.1';
import Dropzone from 'shared/components/dropzone/0.4';
import Draggable from 'shared/components/draggable/0.4';

const PTS = 'pts';

export default function (props, ref, key, opts = {}) {
    var screenProps;
    var timerProps;
    var dropperProps;
    var revealProps;
    var lifeProps;
    var draggableProps;
    var dropzoneProps;

    var binComponents;

    const levelPath = `gameState.data.${_.camelCase(opts.gameName)}.levels.${opts.level}`;

    var start = _.get(props, `${levelPath}.start`, false);
    var gameComplete = _.get(props, `${levelPath}.complete`, false);
    var itemName = _.startCase(_.get(props, 'data.draggable.dragging.props.className', ''));
    var binName = _.get(props, 'data.manual-dropper.binName', '');
    var dropped = _.get(props, 'data.draggable.dropped');
    var revealOpen = _.get(props, 'data.reveal.open', false);
    var revealClose = _.get(props, 'data.reveal.close', false);
    var carouselNext = _.get(props, 'data.manual-dropper.next', false);

    var answers = _.filter(opts.binNames, name => name !== binName);

    opts.score = _.get(props, `${levelPath}.score`, 0);
    opts.highScore = _.get(props, `${levelPath}.highScore`, 0);
    opts.hits = _.get(props, `${levelPath}.hits`, 0);
    opts.truckClassName = _.get(props, 'data.truckClassName', '');
    opts.selectableMessage = _.get(props, 'data.selectable.message', '');

    screenProps = opts.getScreenProps(opts);
    timerProps = opts.getTimerProps(opts);
    dropperProps = opts.getDropperProps(opts);
    revealProps = opts.getRevealProps(opts);
    lifeProps = opts.getLifeProps(opts);
    draggableProps = opts.getDraggableProps(opts);
    dropzoneProps = opts.getDropzoneProps(opts);

    binComponents = _.map(opts.binNames, name =>
        <Carousel
            className={name}
            message={name}
            showNum={20}
            nextOnStart={false}
            bin={<skoash.Randomizer
                remain
                bin={_.map(opts.binItems[name], v =>
                    <Draggable
                        className={v.name}
                        message={v.bin}
                        becomes={v.becomes}
                        {...draggableProps}
                    />
                )}
            />}
        />
    );

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`${opts.gameName}-${opts.level}`}
            complete={gameComplete}
            checkComplete={!gameComplete}
            {...screenProps}
        >
            <skoash.Component
                className="top-left"
            >
                <skoash.Score
                    className="level-score"
                    correct={opts.score}
                    setScore={true}
                >
                    {PTS}
                </skoash.Score>
                <skoash.Timer
                    countDown
                    format="mm:ss"
                    timeout={opts.timeout}
                    complete={gameComplete}
                    pause={revealOpen}
                    resume={!revealOpen}
                    restart={start}
                    {...timerProps}
                />
            </skoash.Component>
            <skoash.Component
                className="item-name"
            >
                <span>
                    {itemName}
                </span>
            </skoash.Component>
            <skoash.Component
                className="bin-name"
            >
                <span>
                    {binName}
                </span>
            </skoash.Component>
            <skoash.Score
                className="life"
                max={0}
                incorrect={opts.maxHits}
                correct={opts.hits}
                setScore={true}
                {...lifeProps}
            />
            <Dropzone
                dropped={dropped}
                {...dropzoneProps}
                dropzones={[<skoash.Component answers={answers} />]}
            />
            <ManualDropper
                className="bins"
                amount={opts.dropperAmount}
                next={carouselNext}
                bin={<skoash.Randomizer
                    remain
                    bin={binComponents}
                />}
                {...dropperProps}
            />
            <skoash.Reveal
                openTarget="reveal"
                openReveal={revealOpen}
                closeReveal={revealClose}
                {...revealProps}
                list={[
                    <skoash.Component
                        ref="resort"
                        type="li"
                    >
                    </skoash.Component>,
                    <skoash.Component
                        ref="retry"
                        type="li"
                    >
                        <p>RETRY</p>
                    </skoash.Component>,
                    <skoash.Component
                        ref="complete"
                        type="li"
                    >
                        <p>COMPLETE</p>
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
