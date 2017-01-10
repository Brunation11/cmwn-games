import classNames from 'classnames';

import Randomizer from 'shared/components/randomizer/0.1';
import Catchable from 'shared/components/catchable/0.1';

const item0 = 'items-0';

class Dropper extends skoash.Component {
    constructor() {
        super();

        this.state = _.defaults({
            items: [],
        }, this.state);
    }

    start() {
        super.start();
        this.setState({
            items: [],
        }, () => {
            this.next(this.props.amount, false);
        });
    }

    drop() {
        var itemRef = this.refs[item0];
        itemRef.addClassName(this.props.dropClass);

        this.updateScreenData({
            key: [this.props.refsTarget, 'drop'],
            data: false,
        });

        this.props.onDrop.call(this, itemRef);
    }

    next(amount = 1, shift = true) {
        var items = this.state.items;
        items = items.concat(this.refs.bin.get(amount));
        if (shift) items.shift();

        this.setState({
            items
        }, () => {
            this.updateScreenData({
                key: [this.props.refsTarget, 'refs'],
                data: _.filter(this.refs, (v, k) => !k.indexOf('items-')),
            });
        });

        this.updateScreenData({
            key: [this.props.refsTarget, 'next'],
            data: false,
        });

        this.props.onNext.call(this);
    }

    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);

        if (props.next === true && props.next !== this.props.next) {
            this.next();
        }

        if (props.drop === true && props.drop !== this.props.drop) {
            this.drop();
        }
    }

    getClassNames() {
        return classNames('manual-dropper', super.getClassNames());
    }

    /*
     * shortid is intentionally not used for key here because we want to make sure
     * that the element is transitioned and not replaced.
     */
    renderItems() {
        return _.map(this.state.items, (item, key) => {
            var ref = 'items-' + key;
            if (!item) return null;
            return (
                <item.type
                    {...item.props}
                    data-ref={ref}
                    data-message={item.props.message}
                    ref={ref}
                    key={key}
                />
            );
        });
    }

    renderBin() {
        return (
            <this.props.bin.type
                {...this.props.bin.props}
                ref="bin"
            />
        );
    }

    render() {
        return (
            <div
                {...this.props}
                className={this.getClassNames()}
            >
                {this.renderBin()}
                <div>
                    {this.renderContentList()}
                </div>
                <ul className="items">
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}

Dropper.defaultProps = _.defaults({
    dropClass: 'DROPPED',
    amount: 1,
    bin: (
        <Randomizer
            bin={[
                <Catchable />,
            ]}
        />
    ),
    refsTarget: 'manual-dropper',
    onDrop: _.noop,
    onNext: _.noop,
    next: false,
    drop: false,
}, skoash.Component.defaultProps);

export default Dropper;
