import React, { Component } from 'react';

import AddTodo from './AddTodo';
import List from '../List/List'


class AddTodoList extends Component {
  state ={ 
    data: []
  }

  handleAddTodo = data => {
    this.setState({ data })
  }
  render() {
    return (
      <div>
        <AddTodo
          onChange={this.handleAddTodo}
        />
        <List 
          data={this.state.data}
        />
      </div>
    );
  }
}

export default AddTodoList;