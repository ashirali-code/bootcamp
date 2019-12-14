// функцию которая принимает два аргумента, строку и букву и
//возвращает количество сколько раз эта буква встречается в строке.

// function a(str, letter){
//     let filterParam = function(item){
//         return letter === item
//     }

//     let arr = str.split("");
    
//     let filterArr = arr.filter(filterParam)
//     let count = filterArr.length;

//     console.log(str, letter, arr, filterArr, count)

//     return count;
// }
// console.log(wordString('america', 'a'))

function wordString(str, letter){
    return str.split("").filter(function(item){//(item это парметр)
        return letter === item
    }).length
}
console.log(wordString('america', 'a'))

/* Создаем какое то функцию укажим два аргумента (строку и букву)
внутри функции вызываем значение функции затем строку разделим 
в букву затем фильтрируем и строго сравниваем задаваемую букву в функции 
затем проверим в консоль*/

// function myTest(str, letter) {
//     return str.split('').filter(function(item){
//         return letter === item
//     })
// }
// let str = prompt('Введите строку')
// let letter = prompt('Введите букву')
// alert(myTest(str,letter))