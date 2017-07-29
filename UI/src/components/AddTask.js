import React, {Component} from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import 'rc-calendar/assets/index.css';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import Button from 'react-bootstrap/lib/Button';

const format = 'MM-DD-YYYY';

function getFormat(time) {
  return time
    ? format
    : 'MM-DD-YYYY';
}

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTime: false,
      showDateInput: false,
      disabled: false
    };
    this.onChange = this.onChange.bind(this);
    this.onTaskChange = this.onTaskChange.bind(this);
    this.createTask = this.createTask.bind(this);

  }

  onChange = function(date) {
    console.log(date);
    this.setState({
      'date': date
    }, () => {
      var moment = this.state.date;
      console.log(moment.toDate());
    })
  }

  onTaskChange = function(event) {
    const value = event.target.value;
    this.setState({'task': value});
  }

  createTask = function() {
    if (this.props.cancel) {
      this.props.onClick();
    }
    this.props.createTask({"name": this.state.task, "isCompleted": false, "date_added": new Date(), "due_date": this.state.date.toDate()})
  }

  render() {
    var state = this.state;
    const calendar = (<Calendar style={{
      zIndex: 5000
    }} disabledTime={null} timePicker={null} showDateInput={state.showDateInput}/>);
    return (
      <div>
        <Row className="show-grid">
          <Col xs={10} className="no-padding">
            <FormControl type="text" placeholder="Enter text" className="full-width no-border-radius show-border" onChange={this.onTaskChange}/>
          </Col>
          <Col xs={2} className="no-padding  align-center">

            <DatePicker animation="slide-up" calendar={calendar} value={state.date} onChange={this.onChange}>
              {({value}) => {
                return (<FormControl type="text" placeholder="Schedule" className="full-width calendar no-border-radius show-border ant-calendar-picker-input ant-input" value={(value && value.format(getFormat(state.showTime))) || ''}/>);
              }}
            </DatePicker>
          </Col>
        </Row>
        <Row className="show-grid margin-top-10">
          <Button bsStyle="danger" onClick={this.createTask}>Add Task</Button>
          {this.props.cancel
            ? <Button bsStyle="danger" className="margin-left-10" onClick={this.props.onClick}>Cancel</Button>
            : null}
        </Row>
      </div>
    )
  };
}

export default AddTask;
