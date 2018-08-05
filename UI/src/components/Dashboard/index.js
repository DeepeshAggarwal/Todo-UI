import React from 'react';
import Tasks from './../Tasks/index';
import Menu from './../Menu/index';
import { Row } from 'react-bootstrap/lib';

class Dashboard extends React.Component {
	render() {
		return (
			<Row className="show-grid justify-content-md-center dashboard">
				<div className="d-none d-lg-block col-lg-4">
					<Menu />
				</div>
				<div className="col-sm-12 col-lg-8">
					<Tasks />
				</div>
			</Row>
		);
	}
}
export default Dashboard;
