//6. Напишите функцию которая принимает число и возвращает его факториал
//используя рекурсию.

// function getFactorial(n){
//     if (n === 1){
//         return 1;
//     }
//     else{
         
//         return n * getFactorial(n - 1);
//     }
// }
// var result = getFactorial(1); 
// console.log(result);


function factorial(n) {
    if (n == 1){
        return 1;
    }
        return n * factorial(n - 1);
}
console.log(factorial(0))
/*мы создали функции даем одно значение*/