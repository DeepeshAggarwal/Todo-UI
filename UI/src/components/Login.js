import React, {Component} from 'react';
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap'
import Header from './Header';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.closeAddTaskModal = this.closeAddTaskModal.bind(this);
    this.showAddTaskModal = this.showAddTaskModal.bind(this);
    this.signSuccess = this.signSuccess.bind(this);
    this.state = {
      'showAddTaskModal': false
    }
  }

  closeAddTaskModal = function(event) {
    // event.preventDefault();
    this.setState({showAddTaskModal: false})
  }

  showAddTaskModal = function(event) {
    event.preventDefault();
    this.setState({showAddTaskModal: true})
  }

  signSuccess = function(response) {
    console.log('sign success', response);
    this.props.history.push({
      pathname: '/home',
      state: response
    });
    // this.history.pushState(null, '');
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Header onSuccess={this.signSuccess}/>
          </Col>
        </Row>
      	<Row>
      		<Col xs={12}>
            <Jumbotron>
              <h1>Hi, Welcome to your task list!</h1>
              <p>Always stay on top of your task and retrieve it any where from any device.</p>
              <p><Button bsStyle='primary'>Learn more</Button></p>
            </Jumbotron>
      		</Col>
      	</Row>
      </Grid>
    )
  }
}

export default withRouter(Login);
