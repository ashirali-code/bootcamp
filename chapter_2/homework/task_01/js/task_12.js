/*12. Теперь создайте валидатор для тел номера, дополнительно вытащите код страны
Пример для телефона: +996700405060*/

let str = prompt('Введите номер телефона')

function phoneNumber(number) {
    let pattern = /^(\+\d+\s?)?(\d+\s?)+$/gi;
    let cod = /^\+\d{1,4}\s?/;
    console.log(pattern.test(number));
    return number.match(cod)[0]
}
alert(phoneNumber(str));