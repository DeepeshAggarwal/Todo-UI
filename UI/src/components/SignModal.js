import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

class SignModal extends Component {

  constructor(props) {
    super(props);
    console.log(props.onSuccess);
    this.state = {
        'form' : props.showSignInModal || props.showSignUpModal
    }

  }

  render() {
    let form = null
    let heading = null
    if (this.state.form === 'signIn') {
        form = <SignInForm onSuccess={this.props.onSuccess} />
        heading = 'Sign In'
    }else {
        form = <SignUpForm onSuccess={this.props.onSuccess}/>
        heading = 'Sign Up'
    }
    return (
      <Modal {...this.props} dialogClassName="signModal">
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {form}
        </Modal.Body>
      </Modal>
    );
  }
};

export default SignModal;
