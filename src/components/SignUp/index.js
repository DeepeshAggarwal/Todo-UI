import React, {Component} from 'react';
import { connect } from 'react-redux';
import {FormGroup, ControlLabel, FormControl, Alert} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap/lib';
import actions from './../../app/actions/index';

const mapDispatchToProps = dispatch => ({
    onSubmit: (userInfo) => {
      dispatch(actions.signUp(userInfo))
    }
})

const mapStateToProps = state => {
  return {
    isLoading: state.signUp.loading,
    isSignUpComplete: state.signUp.complete,
    isSignUpError: state.signUp.error,
    signUpErrorMessage: state.signUp.errorMessage
  }
}

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
      password: null
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

  save = (event) => {
    this.props.onSubmit(this.state);
  }

  render() {
    return ( 
      <Col className="create_account_form">
          {
            this.props.isSignUpError ?
            <Col>
              <Alert variant='danger'>
                <p>
                  { this.props.signUpErrorMessage }
                </p>
              </Alert>
            </Col>
            : null
          }
          {
            this.props.isSignUpComplete ?
            <Col>
              <Alert variant='primary'>
                <p>
                  An email has been send to confirm your email address.
                </p>
              </Alert>
            </Col>
            : null
          }
          <Col>
            <form>
              <FieldGroup id="formControlsText" type="text" label="Username" placeholder="Enter username" onChange={this.handleUserInput} />
              <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email" onChange={this.handleEmailInput}/>
              <FieldGroup id="formControlsPassword" label="Password" type="password" placeholder="Enter password" onChange={this.handlePasswordInput}/>
              <button type="button" onClick={this.save} className="btn btn-primary">
                Sign Up
              </button>
              {
                this.props.isLoading === true ? 'This is loading' : null
              }
            </form>
          </Col>
      </Col>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
