import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Header from './components/Header/index';
import DashBoard from './components/Dashboard/index';
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
        <DashBoard />
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
