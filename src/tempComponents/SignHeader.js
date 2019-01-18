import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SignModal from './SignModal';

class Header extends Component {
  constructor(props) {
    super(props);
    this.closeSignModal = this.closeSignModal.bind(this);
    this.showSignInModal = this.showSignInModal.bind(this);
    this.showSignUpModal = this.showSignUpModal.bind(this);
    this.state = {
      'showSignInModal': false,
      'showSignUpModal': false
    }
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
                <SignModal show={this.state.showSignInModal} onHide={this.closeSignModal} showSignInModal='signIn' />
              </Col>
              <Col xs={1}>
                <a href='' onClick={this.showSignUpModal}>
                  <Navbar.Header>
                    <Navbar.Brand>
                      SignUp
                    </Navbar.Brand>
                  </Navbar.Header>
                </a>
                <SignModal show={this.state.showSignUpModal} onHide={this.closeSignModal} showSignUpModal='signUp'/>
              </Col>
            </Col>
          </Row>
      </Navbar>
    )
  }
}

export default Header;
