import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class Item extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title : props.title
    }
  }

  handleClick = function(event) {
    console.log(this);
    event.preventDefault();
    this.props.onClick(this.state)
  }

  render() {
    return (
      <a href={"#" + this.props.title} >
      <Row id="heading" className="item-height padding-top-2" onClick={this.handleClick}>
        <Glyphicon id="logo" glyph={this.props.logo} />
        <span className="font-14 vertical">{this.props.title}</span>
      </Row>
    </a>
    );
  }
}

export default Item;
