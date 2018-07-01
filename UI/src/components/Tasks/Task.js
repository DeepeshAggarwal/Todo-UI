import React from 'react';
import { Row, Col } from 'react-bootstrap/lib';
import TaskImage from './TaskImage';

class Task extends React.Component {
	render() {
		return (
			<Row className="task">
				<Col>
					<TaskImage />
				</Col>
				<Col sm={11}>
					<span className="font-16 taskName">{this.props.task.name}</span>
					{/*<CalculateDay taskDue={this.props.task.due_date} />*/}
				</Col>
			</Row>
		);
	}
}

export default Task;
