import React from 'react';
import Search from './Search';
import HeaderCTA from './CTA';
import Drawer from './../Common/Drawer';
import { Link } from 'react-router-dom';
class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			isDrawer: false
		};
		this.showDrawer = this.showDrawer.bind(this);
	}

	showDrawer = function() {
		this.setState({
			isDrawer: !this.state.isDrawer
		});
	};

	render() {
		return (
			<div>
				{this.state.isDrawer ? <Drawer showDrawer={this.showDrawer} /> : null}
				<nav className="row navbar navbar-expand-lg navbar-light bg-light">
					<Link className="navbar-brand" to="/">
						ToDo
					</Link>
					{this.props.isLoggedIn ? <Search /> : null}
					<button className="d-lg-none" onClick={this.showDrawer}>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<HeaderCTA isLoggedIn={this.props.isLoggedIn} position="absolute" />
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
