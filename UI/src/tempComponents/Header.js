import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import FormControl from 'react-bootstrap/lib/FormControl'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import AddTaskModal from './AddTaskModal';
import SignModal from './SignModal';

class Header extends Component {
  constructor(props) {
    super(props);
    this.closeAddTaskModal = this.closeAddTaskModal.bind(this);
    this.showAddTaskModal = this.showAddTaskModal.bind(this);
    this.closeSignModal = this.closeSignModal.bind(this);
    this.showSignInModal = this.showSignInModal.bind(this);
    this.showSignUpModal = this.showSignUpModal.bind(this);
    this.state = {
      'showAddTaskModal': false,
      'isSignedIn': props.signedIn,
      'showSignInModal': false,
      'showSignUpModal': false
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

  closeSignModal = function(event) {
    // event.preventDefault();
    this.setState({showSignInModal: false, 'showSignUpModal': false})
  }

  showSignInModal = function(event) {
    event.preventDefault();
    this.setState({showSignInModal: true})
  }

  showSignUpModal = function(event) {
    event.preventDefault();
    this.setState({showSignUpModal: true})
  }

  render() {
    if (this.state.isSignedIn) {
      return (
        <Navbar className="bg-red">
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#" className="cl-white">ToDo</a>
                  </Navbar.Brand>
                </Navbar.Header>
              </Col>
              <Col xs={12} md={8} className="bg-green1">
                <Col xs={5} className="center-margin">
                  <form>
                    <FormControl type="text" placeholder="Enter text"/>
                  </form>
                </Col>
                <Col xs={5}></Col>
                <Col xs={1} className="center-padding">
                  <Glyphicon className="pointer" onClick={this.showAddTaskModal} glyph="glyphicon glyphicon-plus" />
                  <AddTaskModal show={this.state.showAddTaskModal} onHide={this.closeAddTaskModal} createTask={this.props.createTask} />
                </Col>
                <Col xs={1} className="center-padding">
                  <Glyphicon glyph="glyphicon glyphicon-cog"/>
                </Col>
              </Col>
            </Row>
          </Grid>
        </Navbar>
      )
    }else {
      return (
        <Navbar className="bg-red">
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#" className="cl-white">ToDo</a>
                  </Navbar.Brand>
                </Navbar.Header>
              </Col>
              <Col xs={12} md={8} className="bg-green1">
                <Col xs={9}></Col>
                <Col xs={1}>
                  <a href='' onClick={this.showSignInModal}>
                    <Navbar.Header>
                      <Navbar.Brand>
                        SignIn
                      </Navbar.Brand>
                    </Navbar.Header>
                  </a>
                  <SignModal show={this.state.showSignInModal} onHide={this.closeSignModal} showSignInModal='signIn' onSuccess={this.props.onSuccess}/>
                </Col>
                <Col xs={1}>
                  <a href='' onClick={this.showSignUpModal}>
                    <Navbar.Header>
                      <Navbar.Brand>
                        SignUp
                      </Navbar.Brand>
                    </Navbar.Header>
                  </a>
                  <SignModal show={this.state.showSignUpModal} onHide={this.closeSignModal} showSignUpModal='signUp' onSuccess={this.props.onSuccess}/>
                </Col>
              </Col>
            </Row>
        </Navbar>
      )
    }
  }
}

export default Header;
