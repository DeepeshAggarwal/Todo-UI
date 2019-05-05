import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch } from 'react-router-dom';
import Header from './components/Header/index';
import routes from './app/routes/index';
import BaseComponent from './components/BaseComponent';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

class App extends BaseComponent {

  render() {
    return (
      <div className="container-fluid">
        <Header isLoggedIn={this.props.isLoggedIn} />
          <Switch children={routes()} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, () => ({}))(App));
