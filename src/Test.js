import React, { Component } from 'react';
import Modal from './components/Common/Modal';
import SignUp from './components/SignUp/index'
import DatePicker from 'react-datepicker';
import moment from 'moment';
class Test extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      date: new Date(new Date().toDateString())
    };
    this.showModal = this.showModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(momentDate) {
    this.setState({
      date: new Date(momentDate.toDate().toDateString())
    });
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
        <DatePicker
          selected={moment(this.state.date)}
          onChange={this.handleChange}
        />
        <SignUp />
      </div>
    );
  }
}

export default Test;
