import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

class HomePage extends React.Component {
	render() {
		return (
			<Jumbotron>
              <h1>Hi, Welcome to smart way of organizing your tasks!</h1>
              <p>Always stay on top of your task and retrieve it any where from any device.</p>
              <p><Button bsStyle='primary'>Learn more</Button></p>
            </Jumbotron>
        );
	}
}

export default HomePage;