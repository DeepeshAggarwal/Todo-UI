import React from 'react';
import { connect } from 'react-redux';
import HeaderCTA from './../Header/CTA';
import './../../css/drawer.css';
import Menu from './../Menu/index';

const mapStateToProps = state => {
	return {
		isLoggedIn: state.isLoggedIn
	};
};

class Drawer extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		console.log('rendering drawer');
		return (
			<div>
				<div className="drawer-container" onClick={this.props.showDrawer} />
				<div
					className="drawer-main-wrapper"
					tabIndex="-1"
					aria-hidden="true"
					role="dialog"
					aria-label="Content Drawer"
				>
					<div className="slider-title">
						<button
							className="icon-ui-chevron-left-gr-huge"
							aria-label="Close {{title}}"
							tabIndex="0"
						/>
						<span role="heading" aria-level="1">
							ToDo
						</span>
					</div>

					<div className="drawer-body">
						{<HeaderCTA isLoggedIn={this.props.isLoggedIn} />}
						<Menu />
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, () => ({}))(Drawer);
