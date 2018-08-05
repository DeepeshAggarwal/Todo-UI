import React, { Component } from 'react';
import './../../css/modal.css';

const style = { display: 'block' };
const ModalHeader = props => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalCenterTitle">
        {props.children}
      </h5>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={props.close}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

const ModalBody = props => {
  return <div className="modal-body">{props.children}</div>;
};

const ModalFooter = props => {
  return <div className="modal-footer">{props.children}</div>;
};

class Modal extends Component {
  static Header = ModalHeader;
  static Footer = ModalFooter;
  static Body = ModalBody;
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    return (
      <div>
        {this.props.show ? (
          <div>
            <div className="modal-backdrop fade show" />
            <div className="modal-open">
              <div
                className="modal fade show myTestModal"
                id="addTaskModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
                style={style}
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">{this.props.children}</div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Modal;
