import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import AddContactList from './components/AddContact/AddContactList'

class Routes extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={AddContactList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;