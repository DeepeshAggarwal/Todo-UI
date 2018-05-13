import React, { Component } from 'react';
import Item from './Filters.js'

class List extends Component {
  render() {
    var items = this.props.items.map((item, index) => <Item logo={item.logo} title={item.title} key={index} onClick={this.props.onClick} /> )
    return (
      <div className="padding-left-25" >{items}</div>

    );
  }
}

export default List;
