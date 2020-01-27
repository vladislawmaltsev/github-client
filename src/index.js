import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import Login from "./app/pages/Login";
import Search from "./app/pages/Search";
import Profile from "./app/pages/Profile";
import Repository from "./app/pages/Repository";
import MyProfile from "./app/pages/MyProfile";
import {createHttpLink} from 'apollo-link-http';
import {setContext} from "apollo-link-context";


const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    //link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render((
    <ApolloProvider client={client}>
        <BrowserRouter>
            
            <App>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/repository/:login/:name' component={Repository} />
                    <Route path='/profile/:login' component={Profile} />
                    <Route path='/my-profile' component={MyProfile} />
                    <Route path='/search' component={Search} />
                </Switch>
            </App>
        </BrowserRouter>
    </ApolloProvider>
), document.getElementById('root'));

serviceWorker.unregister();

export default client;
