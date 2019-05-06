import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';
import Alert from 'react-bootstrap/lib/Alert';
import actions from './../../app/actions/index';

const mapDispatchToProps = dispatch => ({
    onSubmit: (userInfo) => {
      dispatch(actions.signIn(userInfo))
    }
})

const mapStateToProps = state => {
  return {
    isLoading: state.signIn.loading,
    isSignInComplete: state.signIn.complete,
    responseBody: state.signIn.body,
    isSignInError: state.signIn.error,
    signInErrorMessage: state.signIn.errorMessage
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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isSignInComplete && nextProps.responseBody.validated) {
      localStorage.setItem('x-auth-token', nextProps.responseBody.token);
      this.props.history.push('/user/' + nextProps.responseBody.id);
    }
  }

  handlePasswordInput = (event) => {
    this.setState({ password: event.target.value });
  }

  handleEmailInput = (event) => {
    this.setState({ email: event.target.value });
  }

  save = (event) => {
    this.props.onSubmit(this.state);
  }

  render() {
    return ( 
      <Col>
        {
          this.props.isSignInComplete && !this.props.responseBody.validated ?
          <Col>
            <Alert bsStyle='warning'>
              <p>
                Your still haven't validate your email address. Please validate!!!
              </p>
            </Alert>
          </Col>
          : null
        } 
        {
          this.props.isSignInError ?
          <Col>
            <Alert bsStyle='danger'>
              <p>
                { this.props.signInErrorMessage }
              </p>
            </Alert>
          </Col>
          : null
        } 
        <Col>
          <form>
            <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email" onChange={this.handleEmailInput}/>
            <FieldGroup id="formControlsPassword" label="Password" type="password" placeholder="Enter password" onChange={this.handlePasswordInput}/>
            <button type="button" onClick={this.save} className="btn btn-primary">
              Sign In
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
