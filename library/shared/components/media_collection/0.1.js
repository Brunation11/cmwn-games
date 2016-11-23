class MediaCollection extends skoash.Component {
    play(ref) {
        if (this.refs[ref]) {
            this.refs[ref].play();
            this.props.onPlay.call(this, ref);
        }
    }

    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);

        if (props.play && props.play !== this.props.play) {
            this.play(props.play);
        }
    }
}

MediaCollection.defaultProps = _.defaults({
    onPlay: _.noop,
}, skoash.Component.defaultProps);

export default MediaCollection;
