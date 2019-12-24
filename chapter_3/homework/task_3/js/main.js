// // 4. Создайте обработчик нажатия на кнопку, который будет менять цвет фона страницы.


// //ПЕРВЫЙ СПОСОБ 1-ЗАДАНИЯ
// document.addEventListener("DOMContentLoaded",()=>{
// // //     let btn = document.querySelector('.btn')
    
// // //     btn.addEventListener('click',()=>{
// // //         document.body.style.backgroundColor="green"
// // //     })


// // //ВТОРОЙ СПОСОБ 1-ЗАДАНИЯ
// // let btn = document.querySelector('.btn')
// // let bodyIsBlack = false;
// // function toogleBodyColor(){
// //     let style = document.body.style;
// //     if(bodyIsBlack){
// //         style.backgroundColor = "#FFF";
// //         bodyIsBlack = false;
// //     } else {
// //         style.backgroundColor = "#000"
// //         bodyIsBlack = true;
// //     }
// // }

// // document.addEventListener('click', toogleBodyColor)

// // })


// //ТРЕТИЙ СПОСОБ 1-ЗАДАНИЯ

// let colors = [
//     "black",
//     "green",
//     "red",
//     "blue",
//     "yellow",
//     "white",
// ]

// let colCount = 0;

// let toogleBodyColor = ()=>{
//     let style = document.body.style;
//     style.backgroundColor = colors[colCount++];
//     if(colCount===colors.length){
//         colCount=0;
//     }
// }


// document.addEventListener("DOMContentLoaded",()=>{
//     let btn = document.querySelector("#btn-color");
//     btn.addEventListener("click", toogleBodyColor)

// })
// })


// 4-СПОСОБ ПЕРВЫЙ ТАSК

// let btnOn = document.querySelector('.btn-on');
// let btnOff = document.querySelector('.btn-off');

// btnOn.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = '#fff';
// });

// btnOff.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = '#000';
// })


// // // 5.Создайте HTML-форму и по нажатию на кнопку проверяйте заполненность всех полей. Если останутся незаполненные поля — 
// // // выводите предупреждение и не отправляйте форму.

// let btn = document.querySelector('#btn');
// let inputs = document.querySelectorAll('.inp');
// let container = document.querySelector('#input');
// btn.addEventListener('click', () => {
//     for(item of inputs){
//         if(!item.value){
//             alert('Заполните форму до конца')
//             return;
//         }
//     }
//     alert('ok')
// })










// // 5.Создайте обработчик события на нажатие кнопок направлений (влево, вправо) так, чтобы HTML-элемент 
// // при однократном нажатии на кнопку анимированно сдвигался влево или вправо на 100px

// let square = document.getElementById('square');

// let sqLeft = 0;
// let sqTop = 0;

// document.onkeydown = function(event) {
//     if(event.key == "ArrowUp") {
//         sqTop-=100;
//         square.style.top = sqTop+"px"
//     }else if(event.key == "ArrowDown") {
//         sqTop+=100;
//         square.style.top = sqTop+"px"
//     }else if(event.key == "ArrowLeft") {
//         sqLeft-=100;
//         square.style.left = sqLeft+"px"
//     }else if(event.key == "ArrowRight") {
//         sqLeft+=100;
//         square.style.left = sqLeft+"px"
//     }
// }


// // // 7.Навесьте на событие движения мыши обработчик, который будет в консоль выводить координаты движения. 
// // // Примечание: выводите их как x и y. Событие надо «повесить» на document

// let btn = document.querySelector('#btn')

// document.addEventListener('mousemove', (e) =>{
//     console.log(e.clientX, e.clientY)
//     btn.offsetLeft = e.clientX;
//     btn.offsetRight = e.clientY;
// })


//6 -- Fais metod

// document.addEventListener('DOMContentLoaded', () => {

//     let registerBtn = document.querySelector('.register-btn');
    
//     registerBtn.addEventListener('click', checkFields)


//     function checkFields(){

//         let phoneInput = document.querySelector('.Input-phone');
//         let nameInput = document.querySelector('.Input-name');
//         let lastNameInput = document.querySelector('.Input-lastName');
//         let passwordInput = document.querySelector('.Input-password');
//         let allInput = document.querySelectorAll('input');

//         let status = true;

//         allInput.forEach(item => {
//             if(!item.value) status = false
//         })

//         if(status) {
//             const obj = {
//                 phone: phoneInput.value,
//                 name: nameInput.value,
//                 lastName: lastNameInput.value,
//                 password: passwordInput.value
//             }
            
//             console.log(obj);
//         } else alert('Заполните поля')

//    }

// })


// How TO - Trigger Button Click on Enter
// Trigger a button click on keyboard "enter" with JavaScript.

// Trigger a Button Click on Enter
// Press the "Enter" key inside the input field to trigger the button:

// Some text..
//  Button
// Example
// // Get the input field
// var input = document.getElementById("myInput");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });
