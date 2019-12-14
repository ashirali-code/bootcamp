// Напишите функцию которая возвращает массив из целых чисел в
// диапазоне (x , y)

function diapazone(a,b) {
    let arr = [a];
    while(a!= b) {
        if(a<b) {
            arr.push(++a)
        } else if (a>b){
            arr.push(--a)
        }
    }
    return arr
}
let a = prompt('Введите число диапазон от')
let b= prompt('Введите число диапазон до')
alert(diapazone(a,b))

/*