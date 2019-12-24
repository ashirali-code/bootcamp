let elemById = document.getElementById('title');
let elemId = document.querySelectorAll('#title');

let jElement = $('#title');

jElement.css('color', 'red')
console.log(jElement.css('color'))

// jElement.addClass('example example2 team')
// jElement.prepend('Hello World')

// $('body').append('<h1>Hello World</h1>')

// let tag = document.createElement('h1')
// let elem = tag.innerText= 'Hi World'

// console.log(tag)
// document.querySelectorAll('body').appendChild(tag)

// append and appendTo

//$('h2').appendTo($('li'))
// console.log($('h2').attr('id', 'super-title'))

// $('h2').after('<h1> Hello World </h1>')

// $('ul').before('<h1>')
// console.log($('ul').clone())

console.log($('.list').css('color', 'blue'))

// $('li')['1'].detach()

// $('ul').detach('li').children[1]

// $('ul').children()[1].remove()
// $('li')[0].remove()
// $('ul')[0].remove()[0]//&&&&^^&&///???

// $('#title').empty()

// console.log($('ul').hasClass('li'))

// console.log($('ul:eq(1)').hasClass('li'))//eq = equal начинает с 0, а nth-child с 1
// console.log($('#title').width())//height()

// console.log(typeof $('body').html('<h1>Hello</h1>'))//html изменяет все элементы html

// console.log($('#title').offset())

console.log($('h2').prop(''))
let text = prompt('type something')
$('h1').append(text)