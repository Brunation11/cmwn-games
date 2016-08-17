// import _ from 'lodash';
// import classNames from 'classnames';

import SelectableCanvas from 'shared/components/selectable_canvas/0.1';

class SelectableCanvasMove extends SelectableCanvas {
  render() {
    return (
      <div>
        <div className="list hidden">
          {this.renderContentList('list')}
        </div>
        <canvas
          ref="canvas"
          onClick={this.state.selectFunction.bind(this)}
        />
      </div>
    );
  }
}

export default SelectableCanvasMove;
