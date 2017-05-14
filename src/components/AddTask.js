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
  }

  onChange = function(value) {
    console.log(value);
    this.setState({'value': value}, () => {
      // var moment = this.state.value;
      // console.log(moment.utc().format());
      console.log(this.state.value);
    })
  }

  render() {
    var state = this.state;
    const calendar = (<Calendar
      style={{ zIndex: 5000 }}
      disabledTime={null}
      timePicker={null}
      showDateInput={state.showDateInput}/>);
    return (
      <div>
        <Row className="show-grid">
          <Col xs={10} className="no-padding">
            <FormControl type="text" placeholder="Enter text" className="full-width no-border-radius show-border"/>
          </Col>
          <Col xs={2} className="no-padding  align-center">

            <DatePicker animation="slide-up" calendar={calendar} value={state.value} onChange={this.onChange}>
              {({value}) => {
                return (<FormControl type="text" placeholder="Schedule" className="full-width calendar no-border-radius show-border ant-calendar-picker-input ant-input" value={(value && value.format(getFormat(state.showTime))) || ''}/>);
              }}
            </DatePicker>
          </Col>
        </Row>
        <Row className="show-grid margin-top-10">
           <Button bsStyle="danger">Add Task</Button>
        </Row>
      </div>
    )
  };
}

export default AddTask;
