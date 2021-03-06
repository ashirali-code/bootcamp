import React from 'react';
import './List.css';

class List extends React.Component {
    handleChangeStatus = (item, index) => {
        const newArr = [...this.props.data];            //...копирует значение 

        newArr[index].status = !newArr[index].status// onclick ти басканда статус озгорот тру же фолс 

        this.props.onChange(newArr)
    }

    // componentDidMount() {
    //     console.log('Mounted')
    // }

    // // componentWillUpdate(nextProps, nextState){
    // //     console.log('Updated', nextProps, nextState)
    // // }

    // shouldComponentUpdate(nextProps, nextState, nextContext){
    //     if(nextProps !== this.props){
    //     console.log('UPDATED')
    //     return true
    //     }else return false
    // }

    render() {
        const data = this.props.data;

        return(
            <ul className="todo-list">
                {data.map((item, index) => (
                    <li 
                        key={index}
                        className={item.status ? 'completed' : ''}
                        onClick={ () => this.handleChangeStatus(item, index)}
                    >{item.value}</li>
                ))}
            </ul>
        );
    }
}

export default List;