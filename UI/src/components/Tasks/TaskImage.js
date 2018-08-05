import React from 'react';

class TaskImage extends React.Component {
	constructor(props) {
		super();
		this.onClick = this.onClick.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.state = {
			opacity: props.completed ? 1 : 0
		};
	}

	onClick = function() {
		this.props.taskCompleted();
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
				onClick={() => (!this.props.completed ? this.onClick() : false)}
				onMouseEnter={() =>
					!this.props.completed ? this.onMouseEnter() : false
				}
				onMouseLeave={() =>
					!this.props.completed ? this.onMouseLeave() : false
				}
				className="task-image"
			>
				<div className="tick" style={{ opacity: this.state.opacity }} />
			</div>
		);
	}
}

export default TaskImage;
