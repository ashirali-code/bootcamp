/*3. Создайте 3 инпута. Первые два инпута для ввода двух чисел, которые являются числами от и до.
 Третий инпут для числа, которое должно делиться без остатка на числа введеные от и до. 
 Например введено от 1 до 9 делить на 3. Числа 3, 6, 9 делятся, результат 1, 2, 3 сумма равна 6.*/


//  $('#btn').on('click', function (e){
//      let first = parseInt($('#first').val());
//      let second = parseInt($('#second').val());
//      let third = parseInt($('#third').val());
//      let count = [];
//         for(i = first; i <= second; i++){
//             let ost = i % third; 
//             if(ost === 0){
//                 count.push(i)
//             }
//         }
//         console.log(count);
//  })

let inp1 = $('.inp:eq(0)');
let inp2 = $('.inp:eq(1)');
let inp3 = $('.inp:eq(2)');
let btn = $('.btn');
btn.on('click', function(){
    let result = 0;
    for(let i = inp1.val(); i <= inp2.val(); i++){
        if(i % inp3.val() == 0){//3,6,9
            result += i / inp3.val()//3/3, 6/3, 9/3 = res
        }
    }
    console.log(result)
})