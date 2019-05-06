import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import AddTask from './AddTask';
import { Row } from 'react-bootstrap/lib';

const mapStateToProps = state => {
	return {
		tasks: state.todos.tasks || [],
		filter: state.todos.currentFilter
	};
};

class Tasks extends React.Component {
	render() {
		return (
			<div>
				<Row className="filter-name">{this.props.filter.name}</Row>
				{this.props.tasks
					.filter(
						task =>
							new Date(task.due_date) >= this.props.filter.start_date &&
							new Date(task.due_date) <= this.props.filter.end_date &&
							task.isCompleted === this.props.filter.isCompleted
					)
					.map((task, index) => {
						return <Task key={index} task={task} />;
					})}
				<AddTask />
			</div>
		);
	}
}

export default connect(mapStateToProps, () => ({}))(Tasks);
