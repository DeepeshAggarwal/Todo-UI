import React, { Component } from 'react';
import { connect } from 'react-redux';
class Search extends Component {
	render() {
		return (
			<input
				className="form-control col-4 mr-sm-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
			/>
		);
	}
}

export default connect(() => ({}), () => ({}))(Search);
