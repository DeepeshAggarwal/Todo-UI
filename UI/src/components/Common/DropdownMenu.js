import React, { Component } from 'react';

class DropdownMenu extends Component {
	render() {
		return (
			<div className={`downdownMenu ${this.props.position}`}>
				{this.props.list.map((item, index) => {
					return (
						<div className="cta-item" key={index}>
							{item}
						</div>
					);
				})}
			</div>
		);
	}
}

export default DropdownMenu;
