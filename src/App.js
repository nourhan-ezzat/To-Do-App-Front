import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignUp from './components/sign-up';
import SignIn from './components/sign-in';
import List from './components/list';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/list' component={List} />
      </BrowserRouter>
    );
  }
}

export default App;
