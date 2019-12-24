document.addEventListener('DOMContenLoaded', () =>{



// let btn = document.querySelector('#btn');
// btn.addEventListener('click',()=>{

// })
// function clickFunc(){
//     console.log('click!')
// }
//function clickFunc()


// btn.addEventListener('click',(event)=>{
//     console.log(event)
// })

// btn.addEventListener('click',(event)=>{
//     console.log('Hello')
// });

let btn = document.querySelector('#btn');
let inp = document.querySelector('#inp');
let container = document.querySelector('#tasks');

// console.log(btn)

document.addEventListener('mousemove', () =>{
    console.log(e.clientX, e.clientY);
    btn.offsetLeft = e.clientX;
    btn.offsetRight = e.clientY;
})

// let addElemToContainer = () => {
//     let value = inp.value;
//     let elem = document.createElement('div');
//     elem.innerText = value;

//     container.appendChild(elem);
//     inp.value = '';

//     // if(value.length > 8)  console.log(true)
//     // else console.log(false)
// }
// btn.addEventListener('click', addElemToContainer)
// inp.addEventListener('change', addElemToContainer)


})