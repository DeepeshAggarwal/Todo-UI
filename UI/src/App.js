import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import ListFilters from './components/ListFilters.js'
import ListItems from './components/ListItems.js'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FilterTask from './operations/Filter.js'
class App extends Component {

  constructor(props) {
    // Made this ask object as combination of title and task associated with it
    super(props);
    this.state = {
      filters: [
        {'title': 'Inbox', 'logo':'glyphicon glyphicon-inbox'},
        {'title': 'Today', 'logo' : 'glyphicon glyphicon-calendar'},
        {'title': 'This Week', 'logo' : 'glyphicon glyphicon-calendar'}],
      tasks:[
        {"name":"Test", "isCompleted":false, "date_added": "Tue 25 Apr 2017 17:58:08 +0000", "due_date_utc" : "Sun 30 Apr 2017 06:59:59 +0000"},
        {"name":"Test", "isCompleted":false, "date_added": "Wed 26 Apr 2017 17:58:08 +0000", "due_date_utc" : "Tue 18 Apr 2017 07:59:59 +0000"},
        {"name":"Test", "isCompleted":false, "date_added": "Wed 26 Apr 2017 17:58:08 +0000", "due_date_utc" : "Tue May 23 2017 17:42:18 -0700"}
      ],
      "currentFilter" : {
        'title': 'Inbox'
      }
    };
    this.tasks = this.state.tasks;
    this.changeFilter = this.changeFilter.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  changeFilter = function(filter) {
    this.setState({'currentFilter' : filter}, () => {
      this.setState({tasks: FilterTask.filter(this.tasks, this.state.currentFilter)}, ()=> {
        console.log(this.state);
      });
    })
  }

  createTask = function(task) {
    console.log(task);
    this.tasks.push(task);
    this.changeFilter(this.state.currentFilter);
  }


  render() {
    return (
      <div>
        <Header createTask={this.createTask}/>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4} className="left" id="list"><ListFilters items={this.state.filters} onClick={this.changeFilter}/></Col>
            <Col xs={12} md={8} className="right"> <ListItems tasks={this.state.tasks} heading={this.state.currentFilter} createTask={this.createTask}/> </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
