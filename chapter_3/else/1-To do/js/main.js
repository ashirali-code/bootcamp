document.addEventListener('DOMContentLoaded', () => {
  
    let state = [];
    
    let todoBtn = document.querySelector('.todo-btn');
    let todoInput = document.querySelector('.todo-input');
    let todoList = document.querySelector('.todo-list');
    isFocus = false;
  
  
    todoList.addEventListener('click', event => {
      let className = event.target.className
      let itemIndex = null;
  
      todoList.childNodes.forEach((item, index) => {
        if(item === event.target.parentElement) itemIndex = index
      })
  
      if(className === 'todo-btn__change') editItemStatus(itemIndex)
      else if(className === 'todo-btn__delete') deleteItem(itemIndex)
    })
  
    function deleteItem(index) {
      state.splice(index, 1);
      render(state)
    }
  
    function editItemStatus(index) {
      
  
      state[index].status = !state[index].status;
      render(state);
    }
  
  
    todoBtn.addEventListener('click', addItem);
    // todoInput.addEventListener('change', addItem);
    todoInput.addEventListener('focused', () =>{
    document.addEventListener('keyup', event => {

      })
      if(event.keyCode === 13 && isFocus) {
        addItem();
        console.log(todoInput)
      }
    })
    
    
    function addItem () {
      
      console.log(todoInput.value)
      let value = todoInput.value;
      const item = {
        value,
        status: false
      }
      state.push(item)
      todoInput.value = ''
      render(state)
      
    }
    
  
    function render (arr) {
  
      todoList.innerHTML = ''
  
      arr.forEach(item => {
        let liElem = document.createElement('li');
        
        let btnChangeElem = document.createElement('button');
        let btnDeleteElem = document.createElement('button');
        let spanElem = document.createElement('span');
        
        
        btnChangeElem.innerText = 'Сменить статус';
        btnDeleteElem.innerText = 'Удалить';
        
        btnChangeElem.classList.add('todo-btn__change');
        btnDeleteElem.classList.add('todo-btn__delete');
  
        spanElem.innerText = item.value;
  
        if(item.status) liElem.className = 'todo-item completed'
        else liElem.className = 'todo-item'
  
  
        liElem.append(spanElem);
        liElem.append(btnChangeElem);
        liElem.append(btnDeleteElem);
        
        todoList.append(liElem);
        
      });
    }
    render(state)
  })