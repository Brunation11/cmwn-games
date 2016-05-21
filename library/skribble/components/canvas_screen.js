import Draggable from '../../shared/components/draggable/0.1.js';

class CanvasScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'sample'
    };

  }

  renderPrevButton() {
    return (
      <button className='prev-screen' onClick={this.goto.bind(this,1)}>{'<'}</button>
    );
  }

  renderNextButton() {
    return null;
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

export default CanvasScreen;
