import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { Row } from 'react-bootstrap/lib';

const mapStateToProps = state => {
	return {
		tasks: state.tasks,
		filter: state.currentFilter
	};
};

class Tasks extends React.Component {
	render() {
		return (
			<div>
				<Row className="filter-name">{this.props.filter}</Row>
				{this.props.tasks.map((task, index) => {
					// return <li key={index}>{task.name}</li>;
					return <Task key={index} task={task} />;
				})}
			</div>
		);
	}
}

export default connect(mapStateToProps, () => ({}))(Tasks);
