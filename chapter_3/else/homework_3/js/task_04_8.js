// 8.Создайте обработчик нажатия на кнопку, который будет менять цвет фона страницы.
// 9.Создайте HTML-форму и по нажатию на кнопку проверяйте заполненность всех полей. 
    // Если останутся незаполненные поля — выводите предупреждение и не отправляйте форму.
// 10.Создайте обработчик события на нажатие кнопок направлений (влево, вправо) так, чтобы HTML-элемент 
    // при однократном нажатии на кнопку анимированно сдвигался влево или вправо на 100px
// 11.Навесьте на событие движения мыши обработчик, который будет в консоль выводить координаты движения. 
    // Примечание: выводите их как x и y. Событие надо «повесить» на document
// 12.* Создайте эффект перетаскивания HTML-элементов с классом .drag. Примечание к задаче: напишите обработчики 
    // событий mousedown, mouseup и mousemove
// 13.Создайте модальное окно по аналогии с компонентом Bootstrap: http://getbootstrap.com/javascript/#modals
// 14.Создайте скрипт, реализующий игру Крестики-нолики http://htmllab.ru/krestiki-noliki/
// 15.Создайте эффект голосования, подобно тем, что есть в социальных сетях.



$('.change-color').on('click', () => {
    if($('body').hasClass('colored')) {
        $('body').removeClass();
    }else{
        $('body').addClass('colored')
    }
});


