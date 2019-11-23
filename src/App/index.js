import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import Profile from '../Components/Profile/Profile';
import Organization from '../Components/Organization/Organization';

import * as routes from '../constants/routes';

import './style.css';

class App extends Component {
  state = {
    organizationName: 'facebook',
  };

  onOrganizationSearch = value => {
    this.setState({ organizationName: value });
  };

  render() {
    const { organizationName } = this.state;

    return (
      <Router>
        <div className="App">
          <Navigation
            organizationName={organizationName}
            onOrganizationSearch={this.onOrganizationSearch}
          />

          <div className="App-main">
            <Route
              exact
              path={routes.ORGANIZATION}
              component={() => (
                <div className="App-content_large-header">
                  <Organization organizationName={organizationName} />
                </div>
              )}
            />
            <Route
              exact
              path={routes.PROFILE}
              component={() => (
                <div className="App-content_small-header">
                  <Profile />
                </div>
              )}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
