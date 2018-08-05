import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap/lib';
import TaskImage from './TaskImage';
import actions from './../../app/actions/index';

const taskCompletedAction = actions.taskCompleted;
const mapDispatherToProps = dispath => ({
	taskCompleted: id => dispath(taskCompletedAction(id))
});

class Task extends React.Component {
	render() {
		return (
			<Row className="task">
				<div className="col-2 col-md-1">
					<TaskImage
						completed={this.props.task.isCompleted}
						taskCompleted={() => this.props.taskCompleted(this.props.task.id)}
					/>
				</div>
				<div className="col-10 col-md-11">
					<span className="font-16 taskName">{this.props.task.name}</span>
				</div>
			</Row>
		);
	}
}

export default connect(() => ({}), mapDispatherToProps)(Task);
