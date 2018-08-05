import React, { Component } from 'react';
import Modal from './components/Common/Modal';

class Test extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
  }

  showModal = () => {
    console.log('is callled');
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <button onClick={this.showModal}>Test</button>
        <Modal show={this.state.show}>
          <Modal.Header> Add Task</Modal.Header>
          <Modal.Body> Have to Add Task Here </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={this.showModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              // onClick={this.showModal}
            >
              Add
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Test;
