import Draggable from '../../shared/components/draggable/0.1.js';

class SampleScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'sample'
    };

  }

  renderPrevButton() {
    return null;
  }

  renderNextButton() {
    return (
      <button className={'next-screen'} onClick={this.goto.bind(this, 'canvas')}>{'>'}</button>
    );
  }

  renderContent() {
    return (
      <div>
        <ul>
          <li>
            <Draggable>drag me!</Draggable>
          </li>
          <li>
            <Draggable return={true} >return</Draggable>
          </li>
        </ul>
      </div>
    );
  }
}

export default SampleScreen;
