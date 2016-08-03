import classNames from 'classnames';

class DropzoneComponent extends skoash.Component {
  getClassNames() {
    var message = this.state.content && this.state.content.props ? this.state.content.props.message : '';
    return classNames(
      message,
      skoash.Component.prototype.getClassNames.call(this)
    );
  }
}

export default DropzoneComponent;
