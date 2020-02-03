import React from 'react';
import './App.css';

import List from './components/List/List.js'
import AddContact from './components/AddContact/AddContact'
import Modal from './components/Modal/Modal'

class App extends React.Component {
  state={
    list:[
      {
        name:"pipi",
        lastName:" sasa",
        phone:"+9960777250528"
      },{
        name:"pipi",
        lastName:" sasa",
        phone:"+9960777250528"
      },{
        name:"pipi",
        lastName:" sasa",
        phone:"+9960777250528"
      }
    ],
    currentContactIndex: null
  }

addNewContact = (obj) => {
  const list = [...this.state.list];
  list.push(obj);
  this.setState({ list })
}

deleteContact = index =>{
  const list = [...this.state.list];
  list.splice(index,1);
  this.setState({ list });
}

editContact = (obj) =>{
  const list = [...this.state.list];
  list[this.state.currentContactIndex] = obj;
  this.setState({ 
    list,
    currentContactIndex: null
  });
}

openEdit = (index) => {
  this.setState({ currentContactIndex: index })
}

  render() {
    const list = this.state.list;
    return (
      <div className="App">
        <AddContact
          addNewContact={this.addNewContact}
          data={list}
        />
        <List
          openEdit={this.openEdit}
          deleteContact={this.deleteContact}
          data={list}
        />
        {
          !this.state.currentContactIndex === null ? (

            <Modal
              editContact={this.editContact}
              currentContactIndex={this.state.currentContactIndex}
              data={list}
            />
          ): null
        }
      </div>
    );
  }
}

export default App;
