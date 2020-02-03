import React from 'react'


class Modal extends React.Component {
  state={
    contact: {}
  }
  componentDidUpdate(prevProps){
    if(prevProps === this.props){
      this.setState({ contact: this.props.data[ prevProps.currentContactIndex ]
      })
    }
  }


  setValues = (e) =>{     //(e) - event
    let inputs = {
      "modal-inputs-name": "name",
      "modal-inputs-lastName": "lastName",
      "modal-inputs-phone": "phone"
    };

    const contact = {...this.state.contact};

    let changedVal = inputs[e.target.className];    // e - событие target - элемент на котором событие вызвалась   //
    contact[changedVal] = e.target.value;
    this.setState({ contact });
  }

  editContact = () => {
    this.props.editContact(this.state.contact);
  }

  render() {
    const contact = this.state.contact;
    if(this.props.currentContactIndex === null) return null
    return (
      <div className="modal-card">
        <input onChange={this.setValues} className="modal-inputs-name" value={contact.name}/>
        <input onChange={this.setValues} className="modal-inputs-lastName" value={contact.lastName}/>
        <input onChange={this.setValues} className="modal-inputs-phone" value={contact.phone}/>
        <button onClick={this.editContact}>OK</button>
      </div>
    );
  }
}

export default Modal;