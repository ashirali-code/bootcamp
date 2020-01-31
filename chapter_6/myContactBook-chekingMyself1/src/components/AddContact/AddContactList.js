import React, { Component } from 'react';
import axios from 'axios'

import AddContact from './AddContact';
import List from '../List/List'
import EditContactList from '../EditContactList/EditContactList'

class AddContactList extends Component {
  state={
    data: [],
    currentEditContact: null
  }

  componentDidMount(){
    this.fetchData()
  }
  
  fetchData = async () => {
    const response = await axios.get('http://localhost:8000/list');

    this.setState ({ data: response.data })
  }

  handleAddContact = data  =>{
    this.setState({ data })
  }

  openEdit = contact => {
    this.setState({
        currentEditContact: contact
    })
  }

  render() {
    return (
      <div>
        <AddContact
          update={this.fetchData}
          onChange={this.handleAddContact}
        />
        <List
          update={this.fetchData}
          data={this.state.data}
          openEdit={this.openEdit}
          onChange={this.handleAddContact}
        />
        {this.state.currentEditContact !== null &&
          <EditContactList
            update={this.fetchData}
            closeEdit={this.openEdit}
            contact={this.state.currentEditContact}
          />
        }
      </div>
    );
  }
}

export default AddContactList;