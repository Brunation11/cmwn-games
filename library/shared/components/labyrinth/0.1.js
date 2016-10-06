import classNames from 'classnames';

const IMAGE = 'image';
const MAP = 'map';

class Labyrinth extends skoash.Component {
  constructor() {
    super();
  }

  getClassNames() {
    return classNames('labyrinth', super.getClassNames());
  }

  render() {
    return (
      <div {...this.props} className={this.getClassNames()}>
        <skoash.Image
          ref={IMAGE}
          className={IMAGE}
          src={this.props.img}
        />
        <skoash.Image
          ref={MAP}
          className={MAP}
          src={this.props.map}
        />
      </div>
    );
  }
}

Labyrinth.defaultProps = _.defaults({
  img: '',
  map: '',
}, skoash.Component.defaultProps);

export default Labyrinth;
