import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Jumbotron from  'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import SignHeader from './SignHeader';

class Login extends Component {
  constructor(props) {
    super(props);
    this.closeAddTaskModal = this.closeAddTaskModal.bind(this);
    this.showAddTaskModal = this.showAddTaskModal.bind(this);
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

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <SignHeader />
          </Col>
        </Row>
      	<Row>
      		<Col xs={12}>
            <Jumbotron>
              <h1>Hi, Welcome to your task list!</h1>
              <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <p><Button bsStyle='primary'>Learn more</Button></p>
            </Jumbotron>
      		</Col>
      	</Row>
      </Grid>
    )
  }
}

export default Login;
