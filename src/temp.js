import 'rc-calendar/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import enUS from 'rc-calendar/lib/locale/en_US';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const format = 'YYYY-MM-DD HH:mm:ss';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

function getFormat(time) {
  return time ? format : 'YYYY-MM-DD';
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = <TimePickerPanel />;

function disabledTime(date) {
  console.log('disabledTime', date);
  if (date && date.date() === 15) {
    return {
      disabledHours() {
        return [3, 4];
      }
    };
  }
  return {
    disabledHours() {
      return [1, 2];
    }
  };
}

function disabledDate(current) {
  if (!current) {
    // allow empty select
    return false;
  }
  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.date() + 10 < date.date(); // can not select days before today
}

const Test = React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.object,
    defaultCalendarValue: React.PropTypes.object
  },

  getInitialState() {
    return {
      showTime: true,
      showDateInput: true,
      disabled: false,
      value: this.props.defaultValue
    };
  },

  onChange(value) {
    console.log('DatePicker change: ', value && value.format(format));
    this.setState({
      value
    });
  },

  onShowTimeChange(e) {
    this.setState({
      showTime: e.target.checked
    });
  },

  onShowDateInputChange(e) {
    this.setState({
      showDateInput: e.target.checked
    });
  },

  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled
    });
  },

  render() {
    const state = this.state;
    const calendar = (
      <Calendar
        locale={cn ? zhCN : enUS}
        style={{ zIndex: 1000 }}
        dateInputPlaceholder="please input"
        formatter={getFormat(state.showTime)}
        disabledTime={state.showTime ? disabledTime : null}
        timePicker={state.showTime ? timePickerElement : null}
        defaultValue={this.props.defaultCalendarValue}
        showDateInput={state.showDateInput}
        disabledDate={disabledDate}
      />
    );
    return (
      <div style={{ width: 400, margin: 20 }}>
        <div style={{ marginBottom: 10 }}>
          <label>
            <input
              type="checkbox"
              checked={state.showTime}
              onChange={this.onShowTimeChange}
            />
            showTime
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="checkbox"
              checked={state.showDateInput}
              onChange={this.onShowDateInputChange}
            />
            showDateInput
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              checked={state.disabled}
              onChange={this.toggleDisabled}
              type="checkbox"
            />
            disabled
          </label>
        </div>
        <div
          style={{
            boxSizing: 'border-box',
            position: 'relative',
            display: 'block',
            lineHeight: 1.5,
            marginBottom: 22
          }}
        >
          <DatePicker
            animation="slide-up"
            disabled={state.disabled}
            calendar={calendar}
            value={state.value}
            onChange={this.onChange}
          >
            {({ value }) => {
              return (
                <span tabIndex="0">
                  <input
                    placeholder="please select"
                    style={{ width: 250 }}
                    disabled={state.disabled}
                    readOnly
                    tabIndex="-1"
                    className="ant-calendar-picker-input ant-input"
                    value={
                      (value && value.format(getFormat(state.showTime))) || ''
                    }
                  />
                </span>
              );
            }}
          </DatePicker>
        </div>
      </div>
    );
  }
});

function onStandaloneSelect(value) {
  console.log('onStandaloneSelect');
  console.log(value && value.format(format));
}

function onStandaloneChange(value) {
  console.log('onStandaloneChange');
  console.log(value && value.format(format));
}

ReactDOM.render(
  <div
    style={{
      zIndex: 1000,
      position: 'relative',
      width: 900,
      margin: '20px auto'
    }}
  >
    <div>
      {/* <div style={{ margin: 10 }}>
      <Calendar
        showWeekNumber={false}
        locale={cn ? zhCN : enUS}
        defaultValue={now}
        disabledTime={disabledTime}
        showToday
        formatter={getFormat(true)}
        showOk={false}
        timePicker={timePickerElement}
        onChange={onStandaloneChange}
        disabledDate={disabledDate}
        onSelect={onStandaloneSelect}
      />
    </div> */}
      <div style={{ float: 'left', width: 300 }}>
        <Test defaultValue={now} />
      </div>
      <div style={{ float: 'right', width: 300 }}>
        <Test defaultCalendarValue={defaultCalendarValue} />
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  </div>,
  document.getElementById('__react-content')
);

/*
This file will contain all the odd code which will be picked from time to time 
*/

/* 

App.js

*/
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ListFilters from './components/ListFilters';
import ListItems from './components/ListItems';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FilterTask from './lib/Filter';
import ContentLoader, { Rect } from 'react-content-loader';
import Ajax from './lib/AjaxHelper';

const MyLoader = () => {
  return (
    <ContentLoader
      height={50}
      speed={2}
      primaryColor={'#eeeeee'}
      secondaryColor={'#999'}
    >
      <Rect x={0} y={10} height={10} radius={5} width={'100%'} />
    </ContentLoader>
  );
};

class App extends Component {
  constructor(props) {
    // Made this ask object as combination of title and task associated with it
    if (!props.location.state.id) {
      props.history.push('index');
    }
    super(props);
    this.state = {
      id: props.location.state.id,
      filters: [
        { title: 'Inbox', logo: 'glyphicon glyphicon-inbox' },
        { title: 'Today', logo: 'glyphicon glyphicon-calendar' },
        { title: 'This Week', logo: 'glyphicon glyphicon-calendar' }
      ],
      currentFilter: {
        title: 'Inbox'
      },
      loaded: false
    };
    this.tasks = this.state.tasks;
    this.changeFilter = this.changeFilter.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  componentDidMount = function() {
    const url = 'http://localhost:3001/user/' + this.state.id + '/tasks';
    Ajax.fireGetRequest(
      url,
      response => {
        this.setState({ tasks: response, loaded: true }, () => {
          this.tasks = this.state.tasks;
        });
      },
      response => {
        this.setState({ loaded: true });
        console.log(response.responseJSON.message);
      }
    );
  };

  changeFilter = function(filter) {
    this.setState({ currentFilter: filter }, () => {
      this.setState({
        tasks: FilterTask.filter(this.tasks, this.state.currentFilter)
      });
    });
  };

  createTask = function(task) {
    console.log(task);
    const url = 'http://localhost:3001/user/' + this.state.id + '/task';
    Ajax.firePostRequest(
      url,
      task,
      response => {
        this.tasks.push(task);
        this.changeFilter(this.state.currentFilter);
      },
      response => {
        console.log(response.responseJSON.message);
      }
    );
  };

  render() {
    var taskList = null;
    if (this.state.loaded) {
      taskList = (
        <ListItems
          tasks={this.state.tasks}
          heading={this.state.currentFilter}
          createTask={this.createTask}
        />
      );
    } else {
      taskList = <MyLoader />;
    }
    return (
      <div>
        <Header createTask={this.createTask} signedIn="true" />
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4} className="left" id="list">
              <ListFilters
                items={this.state.filters}
                onClick={this.changeFilter}
              />
            </Col>
            <Col xs={12} md={8} className="right">
              {taskList}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
