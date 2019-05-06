import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import actions from './../../app/actions/index';

const mapDispatchToProps = dispatch => ({
	doValidate: (token) => {
		dispatch(actions.validate(token))
	}
});

const mapStateToProps = state => {
	return {
		isValidationComplete: state.validate.complete,
		isValidationError: state.validate.error,
		validationError: state.validate.errorMessage
	}
}

class Validate extends React.Component {

	componentWillReceiveProps(nextProps) {
		if(nextProps.isValidationComplete) {
			this.props.history.push('/signin');
		}
	}

	componentDidMount() {
		const value = queryString.parse(this.props.location.search);
		const token = value.token;
		this.props.doValidate(token);
	}

	render() {
		return (
			<div>
			{
				this.props.loading ? 'Loading' : null
			}
			{
				this.props.isValidationError ? this.props.validationError : null
			}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Validate);