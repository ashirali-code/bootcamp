// синхронный операция - по порядку запустится операции сверху вниз
console.log('start')
console.log('start2')

//АСИНХРОННЫЙ ОПЕРАЦИЯ (асинхронно - через некоторое время)
//браузере есть специальное функция setTimeout
//функция setTimeout не входить в спецификации JS
// это функция пришло из браузерного API

function timeout2sec(){
    console.log('timeout2sec')
}

window.setTimeout(function(){
    console.log('Inside timeout, after 2000 second')
}, 3000)

window.setTimeout(timeout2sec, 2000)

console.log('end')