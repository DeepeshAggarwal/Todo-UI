import React, {Component} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Item from './Item.js'
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import AddTask from './AddTask';

class List extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.state = {
      addTask: false
    };
  }

  addTask = function(event) {
    // event.preventDefault();
    this.setState({
      addTask: !this.state.addTask
    })
  }

  render() {
    var items = this.props.tasks.map((task, index) => <Item task={task} key={index} onClick={this.props.onClick}/>)
    return (
      <div>
        <div><h3>
          {this.props.heading.title}
        </h3></div>
        <div className="padding-left-25">
          {items}

          {this.state.addTask
            ? <Row className="item-height font-20 padding-top-2 task">
                <AddTask cancel={true} onClick={this.addTask} createTask={this.props.createTask} />
              </Row>
            : <Row className="item-height margin-top-20 task show-grid">
                <Col xs={11} className="padding-left-20 pointer" onClick={this.addTask}>
                  <Glyphicon className="pointer" glyph="glyphicon glyphicon-plus"/>
                  Add Task
                </Col>
              </Row>
          }
        </div>
      </div>
    );
  }
}

export default List;
