import classNames from 'classnames';

class DropzoneComponent extends skoash.Component {
  getClassNames() {
    return classNames(
      this.state.content,
      skoash.Component.prototype.getClassNames.call(this)
    );
  }
}

export default DropzoneComponent;
