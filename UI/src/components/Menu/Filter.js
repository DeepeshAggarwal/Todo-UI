import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../../app/actions/index';

const mapStateToProps = state => ({
	currentFilter: state.currentFilter,
	tasks: state.tasks
});

const mapDispatherToProps = dispath => ({
	updateFilter: filter => dispath(actions.updateFilter(filter))
});

class Filter extends Component {
	render() {
		const isActive =
			this.props.currentFilter.name === this.props.filter.name ? 'active' : '';
		return (
			<li
				onClick={() => {
					if (this.props.closeDrawer) this.props.closeDrawer();
					this.props.updateFilter(this.props.filter);
				}}
				className={`list-group-item d-flex justify-content-between align-items-center ${isActive}`}
			>
				{this.props.filter.name}
				<span className="badge badge-primary badge-pill">
					{
						this.props.tasks.filter(
							task =>
								new Date(task.due_date) >= this.props.filter.start_date &&
								new Date(task.due_date) <= this.props.filter.end_date &&
								task.isCompleted === this.props.filter.isCompleted
						).length
					}
				</span>
			</li>
		);
	}
}

export default connect(mapStateToProps, mapDispatherToProps)(Filter);
