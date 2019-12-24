// let lastName = 'Jackson';

// function sayHello() {
//     var name = 'Jack';
//     console.log('Hello ' + name);
//     function sayBye() {
//         console.log('Bye ' + name)
//     }
//     sayBye();
// }

// // console.log(name);

// sayHello();
// function sayHello() {
//     let name = 'Jack';
//     return function() {
//         name = 'Hello ' + name;
//         return name
//     }
// }

// let helloFunc = sayHello();

// console.log(helloFunc());
// console.log(helloFunc());
// console.log(helloFunc());

// function sumFunc(a) {
//     return function(b) {
//         return a + b
//     }
// }

// const sum = sumFunc(5); // a = 5

// // console.log(sum(2)); // a = 5, b = 2
// // console.log(sum(5)); // a = 5, b = 5

// const sum2 = sumFunc(10);

// console.log(sum(4)) // a = 5, b = 4
// console.log(sum2(3)) // a = 10, b = 3

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

// function testReturn(a,b) {
//     let sum = a + b;
//     return sum
// }

// let firstRes = testReturn(2,5);
// let secRes = testReturn(10,5);

// console.log(secRes / 2);

// console.log(firstRes * 2);
// console.log(secRes * 2);

// for(let i = 0; i < arr.length; i++)

// let arrNum = [1,2,3,4,5];

// function checkArr(arr, i = 0) {
//     if(i < arr.length) {
//         // console.log(arr[i])
//         i++
//         console.log(i)
//         return checkArr(arr, i)
//     }
// }

// checkArr(arrNum);

// const countryArr = ['Russia', 'France', 'Kyrgyzstan', 'Usa'];
// const countryArr2 = ['Japan', 'Canada', 'China', 'Belarus'];

// function longAndShort(countryList) {
//     let newCountryList = [...countryList];
    
//     newCountryList.sort(function(a,b) {
//         return a.length - b.length
//     })

//     let leng = newCountryList.length

//     return newCountryList[0] + ' ' + newCountryList[leng - 1]
// }

// const result1 = longAndShort(countryArr);
// const result2 = longAndShort(countryArr2);
// console.log(result1,result2);
// console.log(countryArr)

// const result1 = function() {
//     let result = [...countryArr];
    
//     result.sort(function(a,b) {
//         return a.length - b.length
//     })

//     return result[0] + ' ' + result[result.length - 1]
// }
// const result2 = function() {
//     let result = [...countryArr2];
    
//     result.sort(function(a,b) {
//         return a.length - b.length
//     })

//     return result[0] + ' ' + result[result.length - 1]
// }

// console.log(result1());
// console.log(result2())

// let obj = {
//     name: 'Faisal',
//     sayHello: function() {
//         let obj2 = {
//             name: 'Emir',
//             sayHello: () => {
//                 console.log(this.name);
//             }
//         }

//         obj2.sayHello();
//     }
// }

// obj.sayHello()