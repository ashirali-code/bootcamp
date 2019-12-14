// let lastName = 'Jackson';

// function sayHello() {
//     var name = 'Jack';
//     console.log('Hello ' + name)
//     function sayBye() {
//         console.log('Bye' + name)
//     }
//     sayBye();
// }

// sayHello();

// function sayHello() {
//     let name = 'Jack';
//     return function() {
//         name = 'Hello ' + name;
//         return name
//     }
// }

// let helloFunc = sayHello();

// console.log(helloFunc())
// console.log(helloFunc())
// console.log(helloFunc())

// function sumFunc(a) {
//     return function(b) {
//         return a + b
//     }
// }

// const sum = sumFunc(5);

// console.log(sum(2));
// console.log(sum(5))

// function testReturn(a,b) {
//     let sum = a + b;
//     console.log(sum)
//     return sum
// }
// let firstRes = testReturn(2,5);
// let secRes = testReturn(10,5)


// console.log(firstRes * 2)
// console.log(firstRes / 2)

// console.log(firstRes * 2)
// console.log(firstRes * 2)

// function incEnv() {
//     let num = 0;
//     return function() {
//         num++
//         console.log(num);
//     }
// }

// let count = incEnv();

// count();
// count();
// count();


// function sumFunc(a) {
//     return function(b) {
//         return a + b
//     }
// }

// let sum = sumFunc(3)(5);

// console.log(sum);

// let arr = [1,2,3,4,5];

// function checkArr(arr, i = 0) {
//     if(i < arr.length) {
//         console.log(arr[i])
//         i++
//         return checkArr(arr, i)
//     }
// }

// checkArr(arrNum);

//аргумент нужен чтобы вставлять разные значении в один функцию

const countryArr = ['Russia', 'France', 'Kyrgyzstan', 'USA'];
const countryArr2 = ['Japan', 'Canada', 'China', 'Belarus'];

function longAndShort(countryList) {
    countryList.sort(function(a,b) {
        return a.length - b.length
    })

    let leng = countryList.length

    return countryList[0] + ' ' + countryList[leng - 1]
}

const result1 = longAndShort(countryArr);
const result1 = longAndShort(countryArr2);
console.log(result,result2);