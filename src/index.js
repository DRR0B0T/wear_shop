import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
