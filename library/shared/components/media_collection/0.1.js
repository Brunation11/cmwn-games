// import _ from 'lodash';

class MediaCollection extends skoash.Component {
  play(ref) {
    if (this.refs[ref]) this.refs[ref].play();

    this.callProp('onPlay', ref);
  }

  componentWillReceiveProps(props) {
    if (props.play && props.play !== this.props.play) {
      this.play(props.play);
    }
  }
}

export default MediaCollection;
