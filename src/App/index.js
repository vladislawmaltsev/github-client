import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import Profile from '../Components/Profile/Profile';
import Organization from '../Components/Organization/Organization';

import * as routes from '../constants/routes';

import './style.css';

const CLIENT_ID = "a41eb2893d39b444824a";
const REDIRECT_URI = "http://localhost:3000/profile";

class App extends Component {
    state = {
        organizationName: 'facebook',
        token: null
    };

    componentDidMount() {
        const code =
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1];
        if (code) {
            fetch(`https://github-react-client.herokuapp.com/authenticate/${code}`)
                .then(response => response.json())
                .then(({ token }) => {
                    this.setState({
                        token,
                    });
                });
        }
    }

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
                    <div>
                        <a
                            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
                        >
                            Login
                        </a>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
