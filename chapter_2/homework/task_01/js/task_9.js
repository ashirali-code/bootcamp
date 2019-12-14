// Функция принимает число n(проверить что n является числом в противном случае
//     завершить работу функции). Функция возвращает строку чисел от 1 до n через
//     разделитель ','. Если число меньше 1 то выдается строка (например n = -2 строка
//     должна быть '1,0,-1,-2').
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

function diapazoneX(b) {
    if(isNaN(+b))return 'err';
    return diapazone(1,b)
}

console.log(diapazoneX(10))


