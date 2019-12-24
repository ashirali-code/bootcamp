// document.addEventListener('DOMContentLoaded', ()=>{


// let elem = document.querySelector('div');
// let btn = document.querySelector('.default-btn');

// // elem.addEventListener('click', (e) => {
// //     alert('Div clicked');
// //     console.log(e.currentTarget);
// // })
// elem.addEventListener('click', function(e) {
//     if(e.target !== this) returnx
//     console.log('DIV CLICKED')
// })

// // btn.addEventListener('click', (e)=> {
// //     e.stopPropogtion();
// //     alert('Btn clicked')
// //     console.log(e.currentTarget);
// // })
// btn.addEventListener('click', function(e) {
//     console.log(this);
// })
// })
// $(document).ready(function(){
//     // $('.default-btn').on('click', (e) =>{
//     //     console.log(e)
//     // })

//     // $(document).on('mousemove', (e) => {
//     //     console.log(e.offsetX, e.offsetY)
//     // })
// })

$(document).ready(function(){

    $('.default-btn').on('click', function(){
        $('.tasks').append('<button class="delete">Delete</button');
    })
        // $('.delete').on('click', function(e){
        //     // this.parent.removeChild(this)
        //     console.log(this)
        // })
        
        // $('.delete').('click', function(){
        //     console.log('DELETE BUTTON CLICKED')
        // })
    // })


    
    $('.tasks').on('click', '.delete', function(e){
        console.log('DELETE BUTTON CLICKED');
    })

    // $('.tasks').on('click', function(e){
    //     if(e.target.className === 'delete') {
    //         console.log('DELETE BUTTON CLICKED');
    //     }
    // })

})
