import Catch1 from './0.1';

class Catch extends Catch1 {
  componentDidMount() {
    this.bucketNodes = _.reduce(this.refs, (a, v) => {
      a.push(ReactDOM.findDOMNode(v));
      return a;
    }, []);
    this.catchableNodes = _.map(this.props.catchables, function (val, key) {
      return ReactDOM.findDOMNode(this.refs[`${key}-catchable`]);
    }.bind(this));
  }

  bootstrap() {
    skoash.Component.prototype.bootstrap.call(this);

    this.bucketNode = ReactDOM.findDOMNode(this.refs.bucket);
  }

  onResize() {
    skoash.trigger('getState').then(state => {
      var zoom = state.scale;
      this.setState({
        zoom
      });
    });
  }

  renderBucket() {
    return _.map([].concat(this.props.bucket), (bucket, key) =>
      <bucket.type
        {...bucket.props}
        ref={'buckets-' + key}
        style={this.getStyle()}
      />
    );
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        {this.renderBucket()}
      </div>
    );
  }
}

export default Catch;
