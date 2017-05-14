import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import AddTask from './AddTask';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class AddTaskModal extends Component {
  render() {
    return (
      <Modal {...this.props} dialogClassName="addTaskModal" bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="show-grid">
            <Col xs={1} />
            <Col xs={10}>
              <AddTask/>
            </Col>
            <Col xs={1} />
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
};

export default AddTaskModal;
