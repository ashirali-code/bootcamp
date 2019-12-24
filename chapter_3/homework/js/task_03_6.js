let title = document.querySelector('h1');
let btn_left = document.querySelector('#left');
let btn_right = document.querySelector('#right');

btn_left.addEventListener('click', (event) => {
    title.style.paddingRight = '100px'
})

btn_right.addEventListener('click', (event) => {
    title.style.paddingLeft = '100px'
})