import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderCTA extends Component {
	render() {
		return (
			<div>
				{this.props.isLoggedIn ? (
					<ul className="navbar-nav ml-auto">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							UserName
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink"
						>
							<Link to="/edit" className="dropdown-item">
								Edit Profile
							</Link>
							<Link to="/exit" className="dropdown-item">
								Exit Team
							</Link>
							<Link to="/" className="dropdown-item">
								Something else here
							</Link>
						</div>
					</ul>
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
