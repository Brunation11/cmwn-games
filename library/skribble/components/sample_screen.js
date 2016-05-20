import Draggable from '../../shared/components/draggable/0.1.js';

class SampleScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'sample'
    };

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
