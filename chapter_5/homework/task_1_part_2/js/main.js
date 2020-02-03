// // setTimeout(() => {
// //     console.log('Async')
// // }, 1000)

// // console.log('Sync')

// // alert('Sync')

// // for(let i = 0; i < 1000000000000; i++){

// // }

// // console.log('Sync')

// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true )

// xhr.onload = function() {
//     console.log(JSON.parse(this.response))
// }

// xhr.send()


// // $.ajax({            // может сделать http запросы сделать легким способом это метод jquery
// //     url: 'https://pokeapi.co/api/v2/pokemon/',  
// // }).done(function(data){
// //     console.log(data)
// // })

// //со стрелочным функциями

// // $.ajax({            // может сделать http запросы сделать легким способом это метод jquery
// //     url: 'https://pokeapi.co/api/v2/pokemon/',  
// // }).done(data => console.log(data))

// $.ajax({            // может сделать http запросы сделать легким способом это метод jquery
//     url: 'https://pokeapi.co/api/v2/pokemon/',  
//     success: function(data) {
//         console.log(data)
//     },
//     error: function(error){
//         console.log(error, 'ERROR')
//     }
// })


//промиса есть 3 статуса 
//pending - ждет пока нечего не происходит
//resolved - 
//rejected


// const request = fetch('https://pokeapi.co/api/v2/pokemon/');

// console.log(request)

// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(result => result.json())
//     .then(data => console.log(data))

//отломить ошибку c .catch

// fetch('https://pokeapi.co/api/v2/pokmon/')
//     .then(result => result.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Some error'))

const age = 20;

// const newPr = new Promise(function(resolve, reject){
//     if(age >= 21){
//         resolve({age, status: true})
//     } else {
//         reject({age, status: false})
//     }
// })

// newPr
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const checkAge = age => {
    return new Promise((resolve, reject) => {
        if(age >= 21){
        resolve({age, status: true})
        } else {
        reject({age, status: false})
        }
    })
}

checkAge(20)
    .then(data => console.log(data))
    .catch(err => console.log(err))

checkAge(25)
    .then(data => console.log(data))
    .catch(err => console.log(err))



// JSON - js object notation - формат данных который представляет из себя обьекты
// это просто информация js
//backend отправляют нам данные как json
//json() - это метод нам возвращает обьекты из списка 