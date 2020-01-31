import React, { Component } from 'react';
import axios from 'axios'

class List extends Component {
  state={
    data: []
  }

  componentDidMount(){
    this.fetchData()
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps !== this.props) {
      nextState.data = nextProps.data
      this.props = nextProps;
      this.fetchData()
    }
    return nextProps.data !== this.props.data || nextState !== this.state.data
  }

  fetchData = async () => {
    const response = await axios.get('http://localhost:8000/list');

    this.setState ({ data: response.data })
  }

  
  handleDeleteContact = async id =>{
    const response = await axios.delete(`http://localhost:8000/list/${id}`);

    if(response.status >= 200 && response.status < 300){
      this.props.update()
    }
  }

  render() {
    return (
      <ul>
        {this.state.data.map(item => (
          <li key={item.id}>
            {item.name},{item.lastName},{item.phone}
            <button onClick={() => this.handleDeleteContact(item.id)}>Delete</button>
            <button onClick={() => this.props.openEdit(item)}>Edit</button>
          </li>
        ))} 
      </ul>
    );
  }
}

export default List;