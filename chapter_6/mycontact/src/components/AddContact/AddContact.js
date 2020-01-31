import React, { Component } from 'react';
import axios from 'axios'

class AddContact extends Component {
  state = {
    name: '',
    lastName: '',
    phone: '',
    id: ''
  
  }

  handleInputName = event => {
    this.setState({ name: event.target.value })
  }
  handleInputLastName = event => {
    this.setState({ lastName: event.target.value })
  }
  handleInputPhone = event => {
    this.setState({ phone: event.target.value })
  }

  handleAddContact = async () => {
    if(!this.state.name || !this.state.lastName || !this.state.phone) return

    const obj = {...this.state}
    const response = await axios.post('http://localhost:8000/list' + obj.id, obj)

    if(response.status > 200 && response.status < 300) {
      this.props.update()
      this.setState({
        name: '',
        lastName: '',
        phone: ''
      })
    }

  }
  
  render() {
    return (
      <div className="add-contact">
        <input onChange={this.handleInputName} placeholder="name" type="text" value={this.state.name}/>
        <input onChange={this.handleInputLastName} placeholder="lastName" type="text" value={this.state.lastName}/>
        <input onChange={this.handleInputPhone} placeholder="phone" type="number" value={this.state.phone}/>
        <button onClick={this.handleAddContact}>AddContact</button>
      </div>
    );
  }
}

export default AddContact;