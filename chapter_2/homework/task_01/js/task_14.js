//Вытащите из строки все заглавные буквы.

let str = 'I will be Waitin for You, Come Back!'
let pattern = /[A-Z]+/g
console.log(str.match(pattern))