// function exampleFunc() {
//     console.log('Hello world');
// }

// exampleFunc();

// for(let i = 0; i < 3; i++) {
//     exampleFunc()
// }

// if(false) {
//     exampleFunc()
// }

// function multiply(a,b) {
//     let result = a * b;
//     console.log(result)
// }

// multiply(2,5);
// multiply(6,6);
// multiply(3,3);

// radiusToSquare(3);

// Function declaration

// function radiusToSquare(r) {
//     let result = Math.PI * (r * r);
//     console.log('Площадь круга ' + result);
// }

// radiusToSquare(5);
// radiusToSquare(10);

// Function expression

// const radiusToSquare = function(r) {
//     let result = Math.PI * (r * r)
//     console.log('Площадь круга ' + result);
// }

// radiusToSquare(3);

// Self-Invoking func
// let hello = 10;

// (function() {
//     let hello = '';
//     console.log('Hello world');
// })()
// let square = null;
// let square2 = null;

// const radiusToSquare = function(r) {
//     let result = Math.PI * (r * r);
//     return result
//     // console.log('Hello world'); не сработает после return
// }

// // radiusToSquare(3);
// // radiusToSquare(5);

// let square1 = radiusToSquare(3);
// let square2 = radiusToSquare(5);

// console.log(square1);
// console.log(square2);

// const inputAge = +prompt('Введите возраст');
// const checkAge = function(age) {
//     return age >= 18
// }

// if(checkAge(inputAge)) {
//     alert('Доступ разрешен')
// } else {
//     alert('Доступ запрешён')
// }

// Arrow Function

// const exampleFunc = (age, hello) => {
//     console.log('Hello world')
// }

