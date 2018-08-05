import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentEditable from './../Common/ContentEditable';
import actions from './../../app/actions/index';
import Modal from './../Common/Modal';
const SPACE_KEYCODE = 32;
const addTaskAction = actions.addTask;
const mapDispatherToProps = dispatch => ({
  addTaskProps: task => dispatch(addTaskAction(task))
});

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isCompleted: false,
      inValid: [],
      show: false
    };
    this.taskDescription = this.taskDescription.bind(this);
    this.add = this.add.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  taskDescription(event) {
    this.setState({
      name: event.target.value,
      inValid: this.state.inValid.filter(element => element !== 'description')
    });
  }

  add(event) {
    if (this.state.name !== '') {
      this.props.addTaskProps(this.state);
      this.showModal();
    } else if (!this.state.inValid.includes('description')) {
      this.setState({
        inValid: this.state.inValid.concat('description')
      });
    }
  }

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <div className="row add-task">
          <span onClick={this.showModal}>+ Add Task</span>
        </div>
        <Modal show={this.state.show}>
          <Modal.Header close={this.showModal}>Add Task</Modal.Header>
          <Modal.Body>
            <form className="form row">
              <div className="form-group col-12">
                <input
                  type="text"
                  className="form-control"
                  id="taskDescription"
                  placeholder="Task Desciption"
                  onChange={this.taskDescription}
                />
                {this.state.inValid.includes('description') ? (
                  <div
                    className="invalid-feedback"
                    style={{
                      display: 'block'
                    }}
                  >
                    Please enter the short description
                  </div>
                ) : null}
              </div>
              <div className="form-group col-12">
                <input
                  type="text"
                  className="form-control"
                  id="taskdate"
                  placeholder="Completion Date"
                />
              </div>
              {/*<div className="form-group col-12">
                <ContentEditable
                  id="tasklabels"
                  placeholder="Labels"
                  className="form-control"
                />
              </div>*/}
            </form>
          </Modal.Body>
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
              onClick={this.add}
            >
              Add
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default connect(() => ({}), mapDispatherToProps)(AddTask);
