// const classrRoom = ['Kubat','Sabir','Ali','Gulzana'];
// const obj = {
//     10: 'hello'
// }
// console.log(classrRoom[classrRoom.length-1])

// const arr = [1,2,3,4,5,6];
// const mapped = arr.map((el, index, currentArr))
// // =>{
// //     console.log(`element ${el}, Index: ${index}, Arr: ${currentArr}`)
// // });// .map он перебирает каждый элемент массива и применяет каждый элемент функции
//     //Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.



// console.log(arr);
// console.log(mapped)


// const arr = [1,2,3,4,5,6];
// const filtered = arr.filter(el => el === 2);
// console.log(arr);
// console.log(filtered);
//// функция и стрелочный функция^
// const arr = [1,2,3,4,5,6];
// const filtered = arr.filter(function(el){
//     return el ===2
// });
// console.log(arr);
// console.log(filtered);

// const arr = [1,2,3,4,5,6];
// const filtered = arr.filter(function(el){
//     return el % 2 === 0    //если функция callback возвращает true елемент добавится новый массив
// });
// // console.log(arr);
// console.log(filtered);

// const arr = [1,2,3,4,5,6];
// const reduced = arr.reduce((total, current) => total + current);
// console.log(reduced);

// const arr = [1,2,3,4,5,6];
// const found = arr.find(el => {
//     console.log(el);
//     return el > 3
// });
// console.log(found);

// const arr = ['Nick', 'Jack', 'John', 'Mike'];
// const foundIndex = arr.findIndex(el => el === 'John');
// console.log(foundIndex);

// const arr = ['Nick', 'Jack', 'John', 'Mike'];
// const foundIndex = arr.indexOf('John');
// console.log(foundIndex);

// const classrRoom = [
//     {
//         name: 'Ainagul',
//         kpi: [116, 92]
//     },
//     {
//         name: 'Allaudin',
//         kpi: [97.6, 6, 75, 75]
//     },
//     {
//         name: 'Altynai',
//         kpi: [129, 127, 94]
//     },
//     {
//         name: 'Atai',
//         kpi: [106, 96, 80]
//     }
// ];

// const found = classrRoom.findIndex(function(el){
//     return el.name === 'Altynai'
// });

// const deletedStudent = classrRoom.splice(found, 1);
// console.log(deletedStudent);

// classrRoom.pop()
// classrRoom.shift()
// console.log(classrRoom)
// classrRoom.push({name: 'Ashirali', kpi: [120, 110, 78]});
// classrRoom.unshift({name: 'Gulayym', kpi: [123, 108, 87]});
// console.log(classrRoom);

// const newClassRoom = classrRoom.slice(2, 4);
// console.log(newClassRoom)

// classrRoom.splice(1, 0, {name: 'Emir', kpi: [130, 120, 150]})
// console.log(classrRoom);

// const numbers = [8, 12, 36, 82, 0, -100500];
// numbers.sort(function(firstEl, secondEl){
//     return secondEl - firstEl
// })
// console.log(numbers.reverse(), numbers);

// function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework.`);
//     callback();
// }
// function alertFinished(){
//     alert('Finished my homework');
//   }
//   doHomework('math', alertFinished);