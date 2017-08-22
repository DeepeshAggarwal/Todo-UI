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

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: null,
      password: null,
      confirmPassword: null,
      error: null
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
    this.handleError = this.handleError.bind(this);

  }

  handleUserInput = function(event) {
    this.setState({user: event.target.value});
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
      console.log(this.state);
      let request = {
          'email': this.state.email,
          'password': this.state.password
      }
      Ajax.firePostRequest('http://localhost:3001/signUp', request, function(response) {
        console.log("Success", response);
      }, this.handleError);
  }

  render() {
    return (
      <div className="create_account_screen">
        <div className="create_account_form">
          {this.state.error}
          <form onSubmit={this.saveAndContinue}>
            <FieldGroup id="formControlsText" type="text" label="Username" placeholder="Enter username" onChange={this.handleUserInput} />
            <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email" onChange={this.handleEmailInput}/>
            <FieldGroup id="formControlsPassword" label="Password" type="password" placeholder="Enter password" onChange={this.handlePasswordInput}/>

            <Button type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUpForm;
