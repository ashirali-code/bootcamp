// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: 
//name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

// Вот так должен работать наш класс:
// var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31


// class Worker{
//     constructor(name, surname, rate, days, getSalary){
//         this.name = name
//         this.surname = surname
//         this.rate = rate
//         this.days = days
//         this.getSalary = getSalary
//     }
//     sayName(){
//         console.log(this.name)
//     }
//     saySurname(){
//         console.log(this.surname)
//     }
//     sayRate(){
//         console.log(this.rate)
//     }
//     sayDays(){
//         console.log(this.days)
//     }
//     sayGetSalary(){
//         console.log(this.rate * this.days)
//     }
// }

// const ivan = new Worker('Ivan', 'Ivanov', 10, 31)

// ivan.sayName()
// ivan.saySurname()
// ivan.sayRate()
// ivan.sayDays()
// ivan.sayGetSalary()



class Worker{
    constructor(name, surname, rate, days){
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary(){
        return this.rate * this.days
    }
}

const ivan = new Worker('Ivan', 'Ivanov', 10, 31)

console.log(ivan.name)
console.log(ivan.surname)
console.log(ivan.rate)
console.log(ivan.days)
console.log(ivan.getSalary())
