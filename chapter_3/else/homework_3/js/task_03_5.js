let btn = document.querySelector('#btn');

let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');

let blockError = document.querySelector('#error');

let blockList = document.querySelector('#list')


let addElemToBlockList = () => {
    if(inp1.value < 1) {
        checkError()
    }else if(inp2.value < 1) {
        checkError()
    }else if(inp3.value < 1) {
        checkError()
    }else{
        addList1()
        inp1.value = ''
        inp2.value = ''
        inp3.value = ''
    }
};

function checkError () {
    blockError.innerHTML = '<div> Заполните все поля!! </div>';
};

function addList1 () {
    for(let i = 1; i <= 3; i++) {
        let elem = document.createElement('div')
        elem.innerText = document.querySelector(`#inp${i}`).value;

        blockList.appendChild(elem);
    }
    blockError.innerHTML = ''
};

btn.addEventListener('click', addElemToBlockList);
inp1.addEventListener('change', addElemToBlockList);
inp2.addEventListener('change', addElemToBlockList);
inp3.addEventListener('change', addElemToBlockList);






