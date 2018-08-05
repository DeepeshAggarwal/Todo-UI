import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = state => ({
	inbox: state.tasks.length,
	today: 1,
	next7Days: 3
});
class Menu extends React.Component {
	render() {
		return (
			<div>
				<ul className="list-group">
					<li className="list-group-item d-flex justify-content-between align-items-center active">
						Inbox
						<span className="badge badge-primary badge-pill">
							{this.props.inbox}
						</span>
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Today
						<span className="badge badge-primary badge-pill">
							{this.props.today}
						</span>
					</li>
					<li className="list-group-item d-flex justify-content-between align-items-center">
						Next 7 Days
						<span className="badge badge-primary badge-pill">
							{this.props.next7Days}
						</span>
					</li>
				</ul>
				<div id="accordion">
					<div
						className="card"
						data-target="#collapseOne"
						data-toggle="collapse"
						aria-expanded="true"
						aria-controls="collapseOne"
					>
						<div className="card-header" id="headingOne">
							<h5 className="mb-0">
								<button className="btn btn-link">Teams</button>
							</h5>
						</div>

						<div
							id="collapseOne"
							className="collapse show"
							aria-labelledby="headingOne"
							data-parent="#accordion"
						>
							<div className="card-body">List</div>
						</div>
					</div>
					<div
						className="card"
						data-toggle="collapse"
						data-target="#collapseTwo"
						aria-expanded="false"
						aria-controls="collapseTwo"
					>
						<div className="card-header" id="headingTwo">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed">Label</button>
							</h5>
						</div>
						<div
							id="collapseTwo"
							className="collapse"
							aria-labelledby="headingTwo"
							data-parent="#accordion"
						>
							<div className="card-body">List</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, () => ({}))(Menu);
