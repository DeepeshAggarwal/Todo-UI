import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import { Row } from 'react-bootstrap/lib';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: null,
      password: null,
      confirmPassword: null,
      error: null
    }
  }

  handleUserInput = (event) => {
    this.setState({user: event.target.value});
  }

  handlePasswordInput = (event) => {
    this.setState({password: event.target.value});
  }

  handleEmailInput = (event) => {
    this.setState({email: event.target.value, error: null});
  }

  // handleError = function(jqXHR, status, errorThrown) {
  //     this.setState({error: jqXHR.responseJSON.message});
  // }

  // signUpSuccess = function(response) {
  //     this.props.onSuccess(response);
  // }

  saveAndContinue = function(event) {
      let request = {
          'username': this.state.user,
          'email': this.state.email,
          'password': this.state.password
      }
      console.log(request);
      // TODO dispath the action to call and add loader in submit button
  }

  render() {
    return ( 
      <Row className="create_account_form">
          <form onSubmit={this.saveAndContinue}>
            <FieldGroup id="formControlsEmail" type="email" label="Email" placeholder="Enter Email" onChange={this.handleEmailInput}/>
            <FieldGroup id="formControlsPassword" label="Password" type="password" placeholder="Enter password" onChange={this.handlePasswordInput}/>
            <button type="button" className="btn btn-primary">
              Sign In
            </button>
          </form>
      </Row>
    )
  }
}

export default SignUp;
