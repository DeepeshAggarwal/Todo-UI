import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import ListFilters from './components/ListFilters.js'
import ListItems from './components/ListItems.js'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filters: [
        {'title': 'Inbox', 'logo':'glyphicon glyphicon-inbox'},
        {'title': 'Today', 'logo' : 'glyphicon glyphicon-calendar'},
        {'title': 'This Week', 'logo' : 'glyphicon glyphicon-calendar'}],
      tasks:[
        {"name":"Test", "isCompleted":false, "date_added": "Tue 25 Apr 2017 17:58:08 +0000", "due_date_utc" : "Sun 30 Apr 2017 06:59:59 +0000"},
        {"name":"Test", "isCompleted":false, "date_added": "Tue 25 Apr 2017 17:58:08 +0000", "due_date_utc" : "Sat 29 Apr 2017 06:59:59 +0000"}
      ]
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick = function(filter) {
    console.log(filter);
    // console.log(event.target.tagName);
  }


  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4} className="left" id="list"><ListFilters items={this.state.filters} onClick={this.onClick}/></Col>
            <Col xs={12} md={8} className="right"> <ListItems tasks={this.state.tasks} onClick={this.onClick}/> </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
