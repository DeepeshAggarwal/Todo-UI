import React, { Component } from 'react';

class ContentEditable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labelText: props.labelText || 'this is deepesh'
		};
		this.emitChange = this.emitChange.bind(this);
		this.createLable = this.createLable.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(this.state, nextState);
		return this.state.labelText.split(' ') === nextState.labelText.split(' ');
	}

	emitChange(event) {
		if (event.target.textContent === this.state.labelText) {
			console.log(this.labelText);
		}
		this.setState({
			labelText: event.target.textContent
		});
	}

	createLable(event) {
		if (event.keyCode === 32) {
			console.log(this.state.labelText);
		}
	}

	render() {
		return (
			<div
				contentEditable
				id={this.props.id}
				className={this.props.className}
				placeholder={this.props.placeholder}
				onInput={this.emitChange}
				onBlur={this.emitChange}
				onKeyDown={this.createLable}
				// dangerouslySetInnerHTML={{ __html: this.props.html }}
			>
				{this.state.labelText
					? this.state.labelText.split(' ').map((value, index) => {
							return (
								<span key={index} className="label">
									<span className="emptyCircle" />
									<span className="text">
										{value}
										</span>	
									<span className="remove">x</span>
								</span>
							);
					  })
					: null}
			</div>
		);
	}
}

export default ContentEditable;
