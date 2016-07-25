import _ from 'lodash';
import classNames from 'classnames';

class Randomizer extends skoash.Component {
  constructor() {
    super();
  }

  start() {
    skoash.Component.prototype.start.call(this);
  }

  getAll() {
    return _.shuffle(this.props.bin);
  }

  get(amount = 1) {
    var bin = [];

    if (this.props.remain) {
      bin = this.state.bin;
    }

    while (bin.length < amount) {
      bin.push(..._.shuffle(this.props.bin));
    }

    if (this.props.remain) {
      this.setState({bin});
    }

    return bin.slice(0, amount);
  }

  getClassNames() {
    return classNames('randomizer', {
      COMPLETE: this.state.complete,
    });
  }

  renderBin() {
    var bin = this.props.bin || [];

    return bin.map((li, key) => {
      var ref = li.ref || li.props['data-ref'] || key;
      return (
        <li.type
          {...li.props}
          data-ref={ref}
          ref={ref}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <ul className={this.getClassNames()}>
        {this.renderBin()}
      </ul>
    );
  }
}

Randomizer.defaultProps = {
  bin: [],
  remain: false
};

export default Randomizer;
