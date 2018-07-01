import React from 'react';
import Search from './Search';
import HeaderCTA from './CTA';
class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					ToDo
				</a>
				{this.props.isLoggedIn ? <Search /> : null}
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<HeaderCTA isLoggedIn={this.props.isLoggedIn} />
				</div>
			</nav>
		);
	}
}

export default Header;
