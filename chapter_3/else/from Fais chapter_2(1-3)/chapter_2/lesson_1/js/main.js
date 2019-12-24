// function exampleFunc() {
//     console.log('Hello world');
// }

// for(let i = 0; i < 3; i++) {
//     exampleFunc()
// }

// if(false) {
//     exampleFunc()
// }

// function multiply(a,b) {
//     let result = a * b;
//     console.log(result);
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

// radiusToSquare(5);

// const radiusToSquare = function(r) {
//     let result = Math.PI * (r * r);
//     console.log('Площадь круга ' + result);
// }

// radiusToSquare(3);

// Self-Invokink func
// let hello = 10;

// (function() {
//     let hello = 'Hello world';
//     console.log(hello);
// })()

// let square = null;
// let square2 = null;

// const radiusToSquare = function(r) {
//     let result = Math.PI * (r * r);
//     return result
//     // console.log('Hello world'); Не сработает после return
// }

// // radiusToSquare(3);
// // radiusToSquare(5);

// let square1 = radiusToSquare(3);
// let square2 = radiusToSquare(5);

// console.log(square1);
// console.log(square2);

// const inputAge = +prompt('Введите возраст');

// const checkAge = function(age) {
//     if(age = 18) {
//         alert('Доступ разрешен')
//     } else {
//         alert('Доступ запрещен')
//     }
// }

// checkAge(+prompt('Введите возраст'));

// if(checkAge(inputAge)) {
//     alert('Доступ разрешен')
// } else {
//     alert('Доступ запрещен')
// }

// Arrow Function

// const exampleFunc = (age, hello) => {
//     console.log('hello world');
// }

// function sayHello() {
//     console.log(arguments);
// }

// sayHello('Faisal', 'Developer');

// let countries = [
//     "kyrgyzstan",
//     "russia",
//     "germany",
//     "france"
// ];

// function veryLongCountry(arr){
//     let sortArr = arr.sort(function(a,b){
//         return a.length - b.length;
//     })
//     return sortArr.pop()
// }
// console.log( veryLongCountry(countries) );



/////////////////////////////////////////////////////////////////



// let elevator = {
//     floor: 1,
//     maxFloor: 16,
//     minFloor: 1,
//     printFloor: function(){
//         console.log("Elevator is on the floor " + this.floor)
//     },
//     upOneFloor: function(){
//         if(this.floor<this.maxFloor){
//             this.floor++;
//             this.printFloor();
//         } else{
//             console.log("Err");
//         }
//     },
//     downOneFloor: function(){
//         if(this.floor>this.minFloor){
//             this.floor--;
//             this.printFloor();
//         } else{
//             console.log("Err");
//         }
//     },
//     toFloor: function(floor){
//         this.printFloor()
//         while(floor!=this.floor){
//             if(floor<this.minFloor || floor > this.maxFloor)break;
//             if(floor<this.floor){
//                 this.downOneFloor();
//             } else if(floor>this.floor){
//                 this.upOneFloor();
//             } else {
//                 break;
//             }
//         }
//     }
// }