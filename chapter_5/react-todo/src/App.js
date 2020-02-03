import React from 'react';
import './App.css';

import AddTodo from './components/AddTodo/AddTodo'
import List from './components/List/List';

class App extends React.Component {
state = {                 // хранилища данных 
  list: [{
    value: 'NewTask',
    status: true
  },
  {
    value: 'NewTask2',
    status: false
  }]
}

handleTodoList = list => {
  this.setState({ 
    list: list
  })
}

  render(){
  const list = this.state.list
    return (
      <div className="App">
        <AddTodo
          data={this.state.list}
          onChange={this.handleList}
        />
        <List
        data={this.state.list}      //пропс
        onChange={this.handleTodoList}
        />    
      </div>
    );
  }
}

export default App;
