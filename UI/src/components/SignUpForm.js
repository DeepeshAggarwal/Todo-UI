import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

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
      email: null,
      password: null,
      confirmPassword: null,
      statesValue: null,
      forbiddenWords: ["password", "user", "username"]
    }
  }

  // handlePasswordInput = function(event) {
  //   this.setState({password: event.target.value});
  // }
  //
  // handleConfirmPasswordInput = function(event) {
  //   this.setState({confirmPassword: event.target.value});
  // }
  //
  // saveAndContinue = function(e) {
  //   e.preventDefault();
  //
  //   var canProceed = this.validateEmail(this.state.email) && this.refs.password.isValid() && this.refs.passwordConfirm.isValid();
  //
  //   if (canProceed) {
  //     var data = {
  //       email: this.state.email,
  //       state: this.state.statesValue
  //     }
  //     alert('Thanks.');
  //   } else {
  //     this.refs.email.isValid();
  //     this.refs.state.isValid();
  //     this.refs.companyName.isValid();
  //     this.refs.password.isValid();
  //     this.refs.passwordConfirm.isValid();
  //   }
  // }
  //
  // isConfirmedPassword = function(event) {
  //   return (event == this.state.password)
  // }
  //
  // handleCompanyInput = function(event) {
  //   this.setState({companyName: event.target.value})
  // }
  //
  // handleEmailInput = function(event) {
  //   this.setState({email: event.target.value});
  // }
  //
  // validateEmail = function(event) {
  //   // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  //   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(event);
  // }
  //
  // isEmpty = function(value) {
  //   return value === undefined && value.lenght === 0;
  // }
  //
  // updateStatesValue = function(value) {
  //   this.setState({statesValue: value})
  // }

  render() {
    return (
      <div className="create_account_screen">
        <div className="create_account_form">
          <form>
            <FieldGroup id="formControlsText" type="text" label="Username" placeholder="Enter username"/>
            <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email"/>
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

export default SignUpForm;
