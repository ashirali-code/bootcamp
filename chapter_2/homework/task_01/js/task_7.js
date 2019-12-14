// function getFibonachi(n)
// {
//     if (n == 0){
//         return 0;
//     }
//     if (n == 1){
//         return 1;
//     }
//     else{
//         return getFibonachi(n - 1) + getFibonachi(n - 2);
//     }
// }
// var result = getFibonachi(8); //21 
// console.log(result); // 21


// 2. Число Фибоначчи - цикл
// function fib(n) {
    // 	var a = 1, b = 1, c;
    
    // 	for( i = 2; i < n; i++){
        // 		c = a + b;
        // 		a = b;
// 		b = c;
// 	}
// 	return c;
// }
// alert(fib(10));

// Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. 
// То есть, следующее число получается как сумма двух предыдущих.
// 1. Число Фибоначчи - рекурсия

// Напишите функцию которая возвращает первые n чисел Фибоначчи (Рекурсия)
function fibonachi(n) {
    return n <= 1 ? n : fibonachi(n-1) + fibonachi(n - 2); 
}
alert(fibonachi(5));

/*
fibo(3)
n<=1 ? ----- false                 1
    fibo(n-1)//2                   +                                           fibo(n-2)//1
        n<=1 ? ----- false                                                     n<=1 ----- true
        fibo(n-1)//1    +     fibo(n-2)//0                                     return 0
*/


