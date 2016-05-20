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
        <Draggable />
      </div>
    );
  }
}

export default SampleScreen;
