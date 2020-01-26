import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Avatar from "../Components/Avatar/Avatar";
import Repositories from "../Components/Repository/Repositories"
import {
  STATUS,
  Loading,
  Logo,
  Logotype,
  Container,
  Header
} from "gitstar-components";

const CLIENT_ID = "df76084ebaa9a735ff88";
const REDIRECT_URI = "localhost:3000/profile";
//const REDIRECT_URI = "https://dridll-github-client.herokuapp.com/authenticate";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
      const token = localStorage.getItem("github_token");
      if (token) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${token}`
          }
        });
      }
    }
  });


class App extends Component {
    state = {
      status: STATUS.INITIAL,
    };
    componentDidMount() {
        const storedToken = localStorage.getItem("github_token");
        if (storedToken) {
            this.setState({
            status: STATUS.AUTHENTICATED
            });
            return;
        }
        const code = window.location.href.match(/\?code=(.*)/) && window.location.href.match(/\?code=(.*)/)[1];
        if (code) {
            this.setState({ status: STATUS.LOADING });
            fetch(`https://dridll-github-client.herokuapp.com/authenticate/${code}`)
            .then(response => response.json())
            .then(({ token }) => {
                if (token) {
                    localStorage.setItem("github_token", token);
                }
                this.setState({
                //token,
                status: STATUS.FINISHED_LOADING
                });
            });
         }  
    }
    render() {
      return (
        <ApolloProvider client={client}>
            <Container>
                <Header>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Logo />
                        <Logotype />
                    </div>
                    <Avatar
                        style={{
                            transform: `scale(${
                            this.state.status === STATUS.AUTHENTICATED ? "1" : "0"
                            })`
                        }}
                    />
                    <a
                        style={{
                            display:
                            this.state.status === STATUS.INITIAL ? "inline" : "none"
                        }}
                        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user%20public_repo%20gist&redirect_uri=${REDIRECT_URI}`}
                    >
                        Login
                    </a>
                </Header>
                <Loading
                    status={this.state.status}
                    callback={() => {
                    if (this.props.status !== STATUS.AUTHENTICATED) {
                        this.setState({
                        status: STATUS.AUTHENTICATED
                        });
                    }
                    }}
                />
                {this.state.status === STATUS.AUTHENTICATED && <Repositories />}
            </Container>
        </ApolloProvider>
        
      );
    }
  }
  
  export default App;