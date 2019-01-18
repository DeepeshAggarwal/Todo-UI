import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './../Common/DropdownMenu';
class HeaderCTA extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: ['Edit Profile', 'Exit Team', 'Sign Out'],
			show: false
		};
		this.showHideMenu = this.showHideMenu.bind(this);
	}

	showHideMenu() {
		this.setState({
			show: !this.state.show
		});
	}

	render() {
		return (
			<div>
				{this.props.isLoggedIn ? (
					<div
						style={{
							position: 'relative'
						}}
					>
						<div
							className="username dropdown-toggle"
							onClick={this.showHideMenu}
						>
							UserName
						</div>
						{this.state.show ? (
							<DropdownMenu
								position={this.props.position}
								list={this.state.items}
							/>
						) : null}
					</div>
				) : (
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/signin" className="nav-link">
								Sign In
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/signup" className="nav-link">
								Sign Up
							</Link>
						</li>
					</ul>
				)}
			</div>
		);
	}
}

export default HeaderCTA;
