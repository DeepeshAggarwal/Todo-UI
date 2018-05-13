import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Header from './components/Header/index';
const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

class App extends Component {
  componentDidMount() {
    // console.log(this.state);
  }

  render() {
    return (
      <div className="container-fluid">
        <Header isLoggedIn={this.props.isLoggedIn} />
        {/* 
        <Home />
        TODO 
        based on logged in 
        true : render dashboard or redirect to dashboard
        false : render home or dont do anything
        <Footer />
        */}
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);
