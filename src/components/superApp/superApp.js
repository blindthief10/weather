import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from '../app/App';

export default class SuperApp extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" render={({match, history, location}) => <App history={history}/>} />
      </HashRouter>
    )
  }
}
