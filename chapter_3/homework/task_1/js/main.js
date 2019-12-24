/*1. Откройте верстку https://codepen.io/faisaliraqi99/pen/MWYjzZV
Выберите при помощи селекторов DOM
— все HTML-элементы strong окрасьте их в зеленый цвет
— найдите все HTML-элементы em и добавьте им класс .selected
— Найдите все элементы mark, которые находятся в div с классом row и задайте им класс .selected
— Найдите все гиперссылки и удалите у них подчеркивания
— Переключите элементы strong с классом some в состояние без этого класса, а тем элементам (strong), у которых небыло этого класса — добавьте.
— среди набора элементов с классом .row удалите класс у второго элемента
— прочитайте CSS-свойство color у второй гиперсылки в тексте*/

// (function() {
//     var elems = document.getElementsByClass('row')
//    console.log(elems)
//    Element.style(rowColorRed)
// });

//1- назначим переменную обращаемся к всем 'strong' элементам потом перебираем и снова назначим 
// имя в переменную (чтобы обращаться в 'stong' элементам) затем открываем стрелочный функцию 
//чтобы внутри функции задать ему стили затем обращаемся в strong через переменный item и стил задаем потом в
//color назначим цвет и все
var elem = document.querySelectorAll('strong').forEach(item =>{
        item.style.color = 'green'
}); // ссылка на element

//2- здесь тоже самое найдем все html-элементы em  но вместо стиль и цвета мы добавим им класс .selected

var elem = document.querySelectorAll('em').forEach(item =>{
    item.classList.add('.selected')
});

/*Найдите все элементы mark, которые находятся в div с классом row и задайте им класс .selected*/
//3- здесь тоже самое найдем все элементы mark мы добавим им класс .selected

var elem = document.querySelectorAll('.row mark').forEach(item =>{
    item.classList.add('.selected')
});

var elem = document.querySelectorAll('a').forEach(item =>{
    item.style.textDecoration = 'none'
});

var elem = document.querySelectorAll('strong').forEach(item =>{// в этом задаче мы удаляем.some если он есть, а если нет то добавляем
    if(item === '.some'){
        item.classList.remove('.some')
    } else {
        item.classList.add('.some') // здесь если элемент изначально отображается то он будет скрыт, если елемент скрыт, то тон будет отображен
    }
    
});


//среди набора элементов с классом .row удалите класс у второго элемента

var elem = document.querySelectorAll('.row')[1].classList.remove('row')
