import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const GITHUB_BASE_URL = 'https://api.github.com/graphql';
// //const GITHUB_BASE_URL = 'https://github-react-client.herokuapp.com/';

// const httpLink = new HttpLink({
//   uri: GITHUB_BASE_URL,
//   // headers: {
//   //   authorization: `Bearer ${
//   //     process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
//   //     //localStorage.getItem('token')
//   //   }`,
//   // },
// });

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//       ),
//     );
//   }

//   if (networkError) {
//     console.log(`[Network error]: ${networkError}`);
//   }
// });

// const link = ApolloLink.from([errorLink, httpLink]);

// const cache = new InMemoryCache();

// const client = new ApolloClient({
//   link,
//   cache,
// });

ReactDOM.render(
  //<ApolloProvider client={client}>
    <App />,
  //</ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
