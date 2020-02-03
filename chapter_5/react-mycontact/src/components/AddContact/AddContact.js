import React from 'react';

import "./AddContact.css"

class AddContact extends React.Component {
  state={
    inputValue:{
      name:"",
      lastName:"",
      phone:""
    }
  }

  setValues = (e) =>{     //(e) - event
    let inputs = {
      "addContact-inputs-name": "name",
      "addContact-inputs-lastName": "lastName",
      "addContact-inputs-phone": "phone"
    };

    const inputValue = {...this.state.inputValue};

    let changedVal = inputs[e.target.className];    // e - событие target - элемент на котором событие вызвалась   //
    inputValue[changedVal] = e.target.value;
    this.setState({ inputValue });
  }

  addNewContact(){
    this.props.addNewContact(this.state.inputValue)
    this.setState({ 
      inputValue: {
        name:"",
        lastName:"",
        phone:""
     }    
    })
  }

  render() {
    const inputValue = {...this.state.inputValue};
    return (
      <div className="addContact">
        <div className="addContact-inputs">
          <input onChange={this.setValues} className="addContact-inputs-name" placeholder="name" value={inputValue.name}/>
          <input onChange={this.setValues} className="addContact-inputs-lastName" placeholder="last name" value={inputValue.lastName}/>
          <input onChange={this.setValues} className="addContact-inputs-phone" placeholder="phone number" value={inputValue.phone}/>
        </div>
        <button onClick={()=>this.addNewContact()}>ADD</button>
      </div>
    );
  }
}

export default AddContact;