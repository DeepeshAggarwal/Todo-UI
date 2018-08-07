import React from 'react';
import Filter from './Filter';

// const mapStateToProps = state => ({
// 	currentFilter: state.currentFilter
// });
class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: [
				{
					name: 'Inbox',
					start_date: new Date(new Date(null).toDateString()),
					end_date: new Date(new Date(new Date().setYear(2050)).toDateString()),
					isCompleted: false
				},
				{
					name: 'Today',
					start_date: new Date(new Date().toDateString()),
					end_date: new Date(new Date().toDateString()),
					isCompleted: false
				},
				{
					name: 'Archieve',
					start_date: new Date(new Date(null).toDateString()),
					end_date: new Date(new Date(new Date().setYear(2050)).toDateString()),
					isCompleted: true
				},
				{
					name: 'Next 7 Days',
					start_date: new Date(new Date().toDateString()),
					end_date: new Date(
						new Date(
							new Date().setDate(new Date().getDate() + 7)
						).toDateString()
					),
					isCompleted: false
				}
			]
		};
	}
	render() {
		return (
			<div>
				<ul className="list-group">
					{this.state.filters.map((filter, index) => {
						return (
							<Filter
								closeDrawer={this.props.closeDrawer}
								key={index}
								filter={filter}
							/>
						);
					})}
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
export default Menu;
// export default connect(mapStateToProps, () => ({}))(Menu);
