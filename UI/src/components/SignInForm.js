import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import Ajax from '../lib/AjaxHelper';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      error: null
    }
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handlePasswordInput = function(event) {
    this.setState({password: event.target.value});
  }

  handleEmailInput = function(event) {
    this.setState({email: event.target.value, error: null});
  }

  handleError = function(jqXHR, status, errorThrown) {
      this.setState({error: jqXHR.responseJSON.message});
  }

  saveAndContinue = function(event) {
      event.preventDefault();
      let request = {
          'email': this.state.email,
          'password': this.state.password
      }
      Ajax.firePostRequest('http://localhost:3001/signIn', request, function(response) {
        console.log("Success", response);
      }, this.handleError);
  }

  render() {
    return (
      <div className="create_account_screen">
        <div className="create_account_form">
          <form onSubmit={this.saveAndContinue}>
            <FieldGroup id="formControlsText" type="text" label="Username/Email address" placeholder="Enter username/email"/>
            <FieldGroup id="formControlsPassword" label="Password" type="password" placeholder="Enter password"/>
            <Button type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignInForm;
