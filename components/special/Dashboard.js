import React, { PureComponent } from 'react';
import Card from '../styles/Card';
import Modal from './Modal';

class DashboardComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      worldModalIsVisible: false,
    };
  }

  closeModal = (name) => {
    this.setState({ [name]: false });
  };

  render() {
    return (
      <div>
        <h1 className="mb-4 text-2xl font-semibold text-gray-900">Dashboard</h1>
        <Modal
          name={'worldModalIsVisible'}
          visible={this.state.worldModalIsVisible}
          closeModal={this.closeModal}
        >
          <h1 className="text-xl font-bold"> Hello world </h1>
        </Modal>
        <Card>
          <p>Hello world.</p>
        </Card>
      </div>
    );
  }
}

export default DashboardComponent;
