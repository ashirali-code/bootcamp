/*Функция принимает параметр min. Параметр должен являться числом. В нем лежит
число от 0 до 59. Функция должна возвращать в какую четверть часа попадает это число (в
первую, вторую, третью или четвертую*/

let min = prompt('Введите число');
function first(min){
    // min = min%60;// это используем чтобы часы в минутах задаем
    if( min >0 && min < 15 ){
        return "Относиться первый четверти"
    } else if( min < 30){
        return 'относится второй четверти'
    } else if( min < 45){
        return 'Относится третий четверти'
    } else if( min < 59){
        return 'Относится четвертый четверти'
    }
}
alert(first(min))
