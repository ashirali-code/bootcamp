import React from 'react';

import './List.css';

class List extends React.Component{
  render(){
    let list = this.props.data
    return (
      <ul className="list-ul">
        {list.map((item, index)=>(
          <li 
            key={index}  // уникальный идентификатор  
            className="list-item">
              <p className="list-item-faq">
                <span className="list-item-name"> 
                  {item.name} 
                </span>
                <span className="list-item-lastName"> 
                  {item.lastName} 
                </span>
              <span className="list-item-phone">
                {item.phone}
              </span>
              <button
                onClick={()=>{this.props.deleteContact(index)}}
                className="list-item-delete-btn"
                >
                  X
                </button>
                <button onClick={()=>this.props.openEdit(index)}
                >
                  Edit
                </button>
                </p>
          </li>
        ))}
      </ul>
    )
  }
}
export default List;

// let func = (arg)=>{
//   console.log("arg")
// }

// let func = (arg)=>{
//   return arg
// }

// let func = arg => arg;

// let func = arg => arg;

// let func2 = arg => {name:arg}   // js думает это тело функции

// let func2 = arg => ({name:arg})   // js думает это тело функции чтобы этого не было чтобы вурнуть обьект мы оборачиваем их в круглые скобки

// let func2 = (arg, arg2) => ()

// let func3 = (arg, arg2)=> "asd"  // вот так функция не работает
// let func3 = (arg, arg2)=> ("asd")  // так  нужно сделать чтобы сработал