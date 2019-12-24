$('#btn').on('click', () => {
    if($('#inp1').val() < 1){
        checkError()
    }else if($('#inp2').val() < 1){
        checkError()
    }else if($('#inp3').val() < 1){
        checkError()
    } else {
        console.log($('input'))
    }

    function checkError() {
        alert('Заполните все поля!!!')
    }
}) 