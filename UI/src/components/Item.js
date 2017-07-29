import React, {Component} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Circle from './../img/circle.svg';
import Col from 'react-bootstrap/lib/Col';

var dayMap = {
  0 : "Sunday",
  1 : "Monday",
  2 : "Tuesday",
  3 : "Wednesday",
  4 : "Thursday",
  5 : "Friday",
  6 : "Saturday",
}

class CalculateDay extends Component {
  render() {
    var taskDue = dayMap[new Date(this.props.taskDue).getDay()]
    return (
      <span className="font-12 taskDate pull-right">
        {taskDue}
      </span>
    )
  }

}

class Item extends Component {
  render() {
    return (
      <Row className="item-height font-20 padding-top-2 task">
        <Col sm={1}><img src={Circle} alt="done" /></Col>
        <Col sm={11} >
          <span className="font-16 taskName">{this.props.task.name}</span>
          <CalculateDay taskDue={this.props.task.due_date} />
        </Col>
      </Row>
    );
  }
}

export default Item;
