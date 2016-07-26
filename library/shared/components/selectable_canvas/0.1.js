import classNames from 'classnames';

class SelectableCanvas extends play.Component {
  constructor() {
    super();
  }

  getClassNames() {
    classNames('selectable-canvas', super.getClassNames());
  }

  renderList() {
    var list = this.props.list || this.state.list;

    return list.map((li, key) => {
      var ref = li.props['data-ref'] == null ? key : li.props['data-ref'];
      return (
        <li
          {...li.props}
          className={this.getClass(li, key)}
          data-ref={ref}
          ref={key}
          key={key}
        ></li>
      );
    });
  }

  render() {
    return (
      <div className={this.getClasses()}>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default SelectableCanvas;
