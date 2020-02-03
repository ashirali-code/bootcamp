// // class Animal {
// //     constructor(name, color, voice){
// //         this.name = name;
// //         this.color = color;
// //         this.word = voice;
// //     }
// //     isLive = true;
// //     eat(){
// //         console.log(this.name + ": ням ням")
// //     }
// //     say(){
// //         console.log(this.voice)
// //     }
// // }

// // class Cat extends Animal{
// //     constructor(n, c, v){
// //         super(n, c, v)
// //     }
// //     a = function(){};
// //     b(){}
// //     sleep(){
// //         console.log("мурррррррр-мурррррррр")
// //     }
// // }
// // let koshka = new Cat("belyi", "MЯУ", "koshka")
// // koshka.say();


// // class Mouse extends Cat{
// //     constructor(n, beer, c){
// //         super(n, b, c)
// //     }
// // }
// // new Mouse("Tom", "Disney", "brown")
// // })

// //FAIS CAMED, OOP BEGINS 06.01.2020.

// class Person {
//     constructor(name, lastName, age){
//         this.name = name
//         this.lastName = lastName
//         this.age = age
//     }
//     sayName() {
//         console.log('Hello my name is ' + this.name)
//     }
//     sayLastName() {
//         console.log('Hello my name is ' + this.lastName)
//     }
//     sayAge() {
//         console.log('Hello my name is ' + this.age)
//     }
//     getInfo() {
//         console.log(this.name, this.lastName, this.age)
//     }
// }

// const nick = new Person('Nick', 'Lotovsky', 45);
// const aibek = new Person('Aibek', 'Lotovsky', 25);

// nick.sayName()
// // emir.sayName()
// aibek.sayName()

// // //НАСЛЕДОВАНИЕ

// // class Worker extends Person {
// //     constructor(workerName, workerLastName, workerAge, position) {
// //         super(workerName, workerLastName, workerAge)
// //         this.position = position
// //     }
// //     work() {
// //         console.log('Я выполняю работу: ' + this.position)
// //     }
// // }

// // const dastan = new Worker('Dastan', 'Alymbekov', 22, 'Mentor');
// // const emir = new Worker('Emir', 'Lotovsky', 15, 'Mentor');

// // dastan.work()
// // dastan.getInfo();
// // dastan.sayName()
// // dastan.sayLastName()

// // emir.work()
// // emir.getInfo();
// // emir.sayName()
// // emir.sayLastName()
// // console.log(emir.age)


// //ИНКАПСУЛЯЦИЯ

// class Worker extends Person {
//     constructor(workerName, workerLastName, workerAge, position, salary) {
//         super(workerName, workerLastName, workerAge)
//         this.position = position
//         this._salary = salary //скрытым сделали
//     }
//     work() {
//         console.log('Я выполняю работу: ' + this.position)
//     }
//     get salary() {              //геттеры
//         return this._salary
//     }
//     set salary(val){        //сеттеры 
//         this._salary = val - 200
//     }
// }

// const dastan = new Worker('Dastan', 'Alymbekov', 22, 'Mentor', 2500);
// const emir = new Worker('Emir', 'Lotovsky', 15, 'Mentor', 2000);

// console.log(dastan.salary)
// // console.log(emir.salary)

// dastan.salary = 3000    

// console.log(dastan.salary)

//STATIC

// class Person {
//     constructor(){
//         this.name = 'Kubat'
//         this.age = 18
//     }

//     static firstName = 'Faisal'  //они принадлежат к классу а не к обьекту

//     static getInfo() {
//         console.log(this.firstName)
//     }

//     getInfo(){
//         return this.name + ' ' + this.age
//     }
// }

// Person.getInfoStatic()

// const obj = new Person();

// console.log(obj.getInfo())
// obj.getInfoStatic()
