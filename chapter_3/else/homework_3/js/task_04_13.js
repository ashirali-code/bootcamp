let divBackground = $('.div-background');
let divMain = $('.div-main');
let btnModal = $('.btn-modal');
let a = $('<button>X</button>')
a.addClass('close-window')

btnModal.on('click', () => {
    divBackground.addClass('back-div');
    divMain.addClass('modal-window');
    divMain.append(a)
})
a.on('click', () => {
    divBackground.remove();
    divMain.remove()
})

