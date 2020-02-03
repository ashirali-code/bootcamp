/*2. Подключите jQuery, убедитесь в доступности объекта -библиотеки. Примечание: попробуйте подключение с разных CDN-хранилищ, и при помощи локального файла.

3. Откройте верстку https://codepen.io/faisaliraqi99/pen/MWYjzZV
Выберите при помощи селекторов jQuery
— все HTML-элементы strong и окрасьте их в зеленый цвет
— найдите все HTML-элементы em и добавьте им класс .selected
— Найдите все элементы mark, которые находятся в div с классом row и задайте им класс .selected
— Найдите все гиперссылки и удалите у них подчеркивания
— Найдите все HTML-элементы, который содержат слово «Задания» и находятся в элементе с классом .container
— Переключите элементы strong с классом some в состояние без этого класса, а тем элементам (strong), у которых небыло этого класса — добавьте.
— среди набора элементов с классом .row удалите класс у второго элемента
— прочитайте CSS-свойство color у второй гиперсылки в тексте
*/

$('strong').css('color','green');

$('em').addClass('.selected');

$('row','mark').addClass('.selected')

$('a').css('textDecoration','none')



$('strong').toggle('some') //.toggle() оно делает если элемент изначально отображается то он будет скрыт, 
//если елемент скрыт, то тон будет отображен

$('.row:eq(1)').removeClass('row') //:eq()он вытащит елемент по индексу 1 




                            