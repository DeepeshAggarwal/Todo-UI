import React from 'react';
import queryString from 'query-string';
import { connect} from 'react-redux';
import actions from './../../app/actions/index';
console.log(actions);
const mapDispatchToProps = dispatch => ({
	doValidate: (token) => {
		dispatch(actions.validate(token))
	}
});

const mapStateToProps = state => {
	return {
		isValidationComplete: state.validate.complete,
		isValidationError: state.validate.error
	}
}

class Validate extends React.Component {

	componentWillReceiveProps(nextProps) {
		if(nextProps.isValidationComplete) {
			console.log(this.props, nextProps);
			console.log("validated");
		}
	}

	componentDidMount() {
		const value=queryString.parse(this.props.location.search);
		const token=value.token;
		this.props.doValidate(token);
	}

	render() {
		return null;
	}
}

export default connect(() => ({}), mapDispatchToProps)(Validate);