import React, { Component } from 'react';
import axios from 'axios'

class AddContact extends Component {
  state={
    name: '',
    lastName: '',
    num: '',
    id:''
  }

  handleInputName = event => {
    this.setState({ name: event.target.value })
  }

  handleInputLastName = e => {
    this.setState({ lastName: event.target.value })
  }

  handleInputNum = e => {
    this.setState = e => ({ phone: event.target.value })
  }

  render() {
    return (
      <div className='add-contact'>
        <input onChange={this.handleInputName} value={this.state.name} />
        <input onChange={this.handleInputLastName} value={this.state.lastName} />
        <input onChange={this.handleInputNum} value={this.state.phone} />
        <button onClick={this.handleAddContact}>AddContact</button>
      </div>
    );
  }
}

export default AddContact;