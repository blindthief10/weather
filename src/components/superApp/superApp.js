import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../app/App';

export default class SuperApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" render={({match, history, location}) => <App history={history}/>} />
      </BrowserRouter>
    )
  }
}
