import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import AddTodoList from './components/AddTodo/AddTodoList'
import List from './components/List/List'
import AddTodo from './components/AddTodo/AddTodo'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={AddTodoList} />
          <Route exact path='/list' component={List} />
          <Route exact path='/add' component={AddTodo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;