import React from 'react';
import Tasks from './../Tasks/index';
import Menu from './../Menu/index';
import { Row, Col } from 'react-bootstrap/lib';
// const mapStateToProps = state => {
// 	return {
// 		filter: state.filter,
// 		tasks: state.tasks
// 	};
// };

class Dashboard extends React.Component {
	render() {
		return (
			<Row className="show-grid justify-content-md-center dashboard">
				<Col sm={3}>
					<Menu />
				</Col>
				<Col sm={6}>
					<Tasks />
				</Col>
			</Row>
		);
	}
}

// export default connect(mapStateToProps, () => ({}))(Dashboard);
export default Dashboard;

// {
// 	 <ul>
// 				{this.props.tasks.map((task, index) => {
// 					return <li key={index}>{task.name}</li>;
// 				})}
// 			</ul>
// }
