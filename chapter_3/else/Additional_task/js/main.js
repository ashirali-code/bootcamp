/*Создайте приложение To-Do list (Google it)

Приложение задачник, в которое вы можете добавлять задачу. У задачи есть статусы: 'К выполнению', 
'Выполнено', по умолчанию у задачи статус к выполнению.В каждой задаче должен отображаться текст 
с задачей и статус.Возле каждой задачи должны быть кнопки: 'Удалить', 'Сменить статус'

1. Добавить вывод задач
2. Добавить функционал добавления задач
3. Добавить функционал изменения статуса задач
4. Добавить функционал удаления задач*/

let btn = $('.btn');
let inp = $('.inp');
let container = $('.container')

btn.on("click",(e)=>{
    let text = inp.val()
    let cardEl = createCard(text);
    container.append(cardEl)
    inp.val("")
})

function createCard(text){
    return $(`<li>${text}</li>`);
}




















$('.btn').css({
    color: 'green'
});

$('h1').css({
    'color': 'red',
    'font-size': '20px',
    'margin-left': '15px'
});

$('.inp').css('color', 'blue');

$('.container').css('color', 'purple');


// removeClass(function(index, currentClass){ return className }) — удаление класса используя функцию обратного вызова 
// $('h1')/*.text('Этот текст скоро исчезнет')*/.fadeOut(500).fadeIn(1000);
// $('h1').slideUp(1000).slideDown(500)
// $('h1').fadeOut(500);
// $('h1').fadeIn(1000);

