import React from 'react';

class TaskImage extends React.Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.state = {
			opacity: 0
		};
	}

	onClick = function() {
		console.log('clicked');
	};

	onMouseEnter = function() {
		this.setState({
			opacity: 1
		});
	};

	onMouseLeave = function() {
		this.setState({
			opacity: 0
		});
	};

	render() {
		return (
			<div
				onClick={this.onClick}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
				className="task-image"
			>
				<div className="tick" style={{ opacity: this.state.opacity }} />
			</div>
		);
	}
}

export default TaskImage;
