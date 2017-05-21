import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import FormControl from 'react-bootstrap/lib/FormControl'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import AddTaskModal from './AddTaskModal';

class Header extends Component {
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
  }
}

export default Header;
