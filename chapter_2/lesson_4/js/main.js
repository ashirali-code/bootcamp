// let firstName = 'Faisal';

// // let result = 'Hello' = firstName;

// let result = `Hello ${firstName}`;

// console.log(result);

// let a = 5;
// let b = 10;

// let result = `${a} + ${b} = ${a + b}`;

// console.log(result)

// function multiply(a,b) {
//     return a * b
// }

// let result = `2 * 5 = ${1,2,3,}`;

// console.log(result);

// let str = 'Hello my name is \'Jack\' \nMy profession is Developer';
// console.log(str);

// let str = 'Name: Fais, lastName: Iraqi';
// let newArr = []

// for(let i = 0; i < str.length; i++) {
//     if str([i] !== 'a') newArr.push(str[i])
//     else newArr.push('*');
// }

// let newStr = newArr.join('');

// console.log(newStr)


// let str = 'Name: Fais, lAstName: Iraqi\n hahaha ';

// console.log(str.replace(/\d/gi, '*'));

// console.log(!pattern.test(str));
// if(!pattern.test(str)) {
//     alert('Все равно');
// } else {
//     alert('Введите только число')
// }

// let str = prompt('Введите номер телефона');
// let pattern = /^\+?\d+?/gi;
        
// console.log(pattern.test(str))

let str = prompt('Введите');
let pattern = new RegExp(name,'gi');
console.log(pattern.test(str))