// // var firstName = 'MyName';
// // var lastName = 'myLastName';

// function sayHello(){
//     return 'Hello'
// }
// localStorage.setItem('username', 'Jack');
// localStorage.setItem('password', '12345');

// let elems = document.getElementsByTagName('body');
// let value = prompt('Введите цвет')

// // console.log(elems);
// elems[0].style.backgroundColor = value;

// let elems = document.getElementsByTagName('body');
// let value = prompt('Введите возраст')


// elems[0].style.backgroundColor = value;
// if(+value >= 18) {
//     elems[0].style.backgroundColor = 'green';
// } else {
//     elems[0].style.backgroundColor = 'red';
// }

let elemById = document.getElementById('title');
let elemByClass = document.getElementsByClassName('list');
let getElementsByTagName = document.getElementsByTagName('li');
let elemByName = document.getElementsByName('item');

let elemId = document.querySelector('#title');
let elemClass = document.querySelectorAll('.list');
let elemsTag = document.querySelectorAll('li');
let elemsName = document.querySelectorAll('[name="item]')

console.log(elemId);

// elem.style.backgroundColor = 'orange';