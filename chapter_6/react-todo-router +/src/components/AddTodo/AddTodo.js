import React, { Component } from 'react';
import axios from 'axios'

class AddTodo extends Component {
  state = {
    inputVal: ''
  }

  handleInput = event => {
    this.setState({ inputVal: event.target.value })
  }

  handleAddTodo = async () => {
    if(!this.state.inputVal) return

    const obj = {
      text: this.state.inputVal,
      status: false
    }
    const response = await axios.post('http://localhost:8000/list', obj)

    if(response.status > 200 && response.status < 300){
      const getResponce = await axios.get('http://localhost:8000/list')

      if(!this.props.onChange) return
      this.props.onChange(getResponce.data);
    }
  }

  render() {
    return (
      <div className="add-todo">
        <input onChange={this.handleInput} placeholder="write works" type="text"/>
        <button onClick={this.handleAddTodo}>AddTodo</button>
      </div>
    );
  }
}

export default AddTodo;