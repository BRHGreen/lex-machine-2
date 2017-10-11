import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import test from './test'
const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
  <ApolloProvider client={client}>
    <BrowserRouter history={hashHistory}>
      <Route path='/' component={test} />
    </BrowserRouter>
  </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
