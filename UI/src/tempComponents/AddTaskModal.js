import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import AddTask from './AddTask';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class AddTaskModal extends Component {

  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
  }

  createTask = function(task) {
    this.props.onHide()
    this.props.createTask(task);
  }

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
              <AddTask cancel={false} createTask={this.createTask}/>
            </Col>
            <Col xs={1} />
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
};

export default AddTaskModal;
