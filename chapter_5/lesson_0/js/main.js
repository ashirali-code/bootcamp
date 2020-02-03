// function createObj(name, age){
// //     return {
// //         name: name,
// //         age: age
// //     }
//     return{name, age}
// }
// console.log(createObj("emir", 16));

// function ConstructorObj(name, age){
//     this.age = age;
//     this.name = name;
// }
// ConstructorObj.prototype.sayHi = function(){
//     console.log(`Hi, Im ${this.name}`)
// }

// let emir = new ConstructorObj("emir", 16)
// let fais = new ConstructorObj("Fais", 20)
// console.log( emir )

// class Animal {
//     constructor(name, color, word){
//         this.name = name;
//         this.color = color;
//         this.word = word;
//     }
//     isLive = true;
//     say(){
//         console.log(this.word)
//     }
// }

// let cat = new Animal("cat", "green", "myau")
// let dog = new Animal("dog", "black", "gaf")
// let bird = new Animal("bird", "white", "chichichichiiii")
// let cow = new Animal("cow", "red", "muu")
// cat.say();
// dog.say();
// bird.say();
// cow.say();

/*
Создать класс Cat который принимает имя породу, и цвет 
у каждого экземпляра должны быть свойства голода, 
счастья и здоровья и усталости которые зависят друг от друга
и методы Играть, Кормить, Лечить, Спать
которые всячески влияют на свойства голода, здоровья и.т.д
К примеру Играть увеличивает счастье но уменьшает усталость и голод
class Cat {
    constructor(name, breed, color){
        this.name = name;
        this.breed = breed;
        this.color = color;
    }
*/

$(document).ready(function(){  //подключаем дому html

/* class (JavaScript использует другой механизм и терминологию, как вы увидите ниже) — это 
на самом деле не объект, а шаблон, который определяет, какие характеристики должен иметь объект.*/

//Когда экземпляр объекта создается из класса, для его создания выполняется функция-конструктор класса. 
//Этот процесс создания экземпляра объекта из класса называется создание экземпляра (instantiation) — из класса создается экземпляр объекта.

class Cat {                             // создаем класс который принимает имя, породу и класс 
    constructor(name, breed, color){    //Вы также увидите, что ключевое слово this также используется здесь, - это в основном говорит о том,
        this.name = name;               // что всякий раз, когда создается один из этих экземпляров объектов, свойство имени объекта будет равно
        this.breed = breed;             // значению name, переданному вызову конструктора, и метод greeting() будет использовать значение имени,
        this.color = color;             // переданное также вызову конструктора
    }
    happiness = 100;
    hungry = 100;
    tiredness = 0;

    fix(){
        if(this.happiness > 100){this.happiness = 100};
        if(this.hungry > 100){this.hungry = 100};
        if(this.tiredness > 0){this.tiredness = 0};
        if(this.hungry < 0){this.hungry = 0};
        if(this.happiness < 0){this.happiness = 0};
        if(this.tiredness < -100){this.tiredness =-100};
    }

    play() {                    //метод Играть   
        this.happiness += 10;
        this.hungry -= 5;
        this.tiredness -= 20;
        this.fix()        
        
    }
    feed() {                    //метод кормить
        this.happiness += 20;
        this.hungry += 20;
        this.fix()        
    }
    treat() {                  //метод лечить
        this.happiness += 100;
        this.hungry += 100;
        this.tiredness = 0;
        this.fix()
    }
    sleep() {                   //метод спать
        this.happiness += 20;
        this.hungry -= 10;
        this.tiredness =0;
        this.fix()
    }
    health() {
    return (this.happiness + this.hungry + this.tiredness) / 2;
    };
}

let sarymyshyk = new Cat('Sasha','chisto kyrgyzkiy','yellow');   // у каждого экземпляра должны быть свойства голода 

let play = $('.play');
let feed = $('.feed');
let treat = $('.treat');
let sleep = $('.sleep');

function render(){
    $('.health-score').css('height',sarymyshyk.health() + '%')
    $('.happiness-score').css('height',sarymyshyk.happiness + '%')
    $('.hangry-score').css('height',sarymyshyk.hungry + '%')
    $('.tiredness-score').css('height',-sarymyshyk.tiredness + '%')
    $('.health-score').text(sarymyshyk.health());
    $('.happiness-score').text(sarymyshyk.happiness);
    $('.hungry-score').text(sarymyshyk.hungry);
    $('.tiredness-score').text(sarymyshyk.tiredness);
}

play.on('click',()=> {      
    sarymyshyk.play()
    render()
})

feed.on('click',() => {     
    sarymyshyk.feed()
    render()
})

treat.on('click',() => {
    sarymyshyk.treat()
    render()
})

sleep.on('click',() => {
    sarymyshyk.sleep()
    render()
})

class Mouse extends Cat{
    constructor(n, beer, c){
        super(n, b, c)
    }
}
new Mouse("Tom", "Disney", "brown")
})