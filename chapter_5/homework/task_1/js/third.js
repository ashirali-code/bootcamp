// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и 
// для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:

// var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

class Worker{
    constructor(name, surname, rate, days, salary){
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
        this._salary = salary
    }
 
    getRate(){
        return this._rate
    }
    setRate(val){
        return this._rate = val
    }
    getDays(){
        return this._days
    }
    setDays(val){
        return this._days = val
    }
    getSalary(){
        return this._salary = this._rate * this._days
    }
}

const ivan = new Worker('Ivan', 'Ivanov', 10, 31)


console.log(ivan.getRate())
console.log(ivan.getDays())
console.log(ivan.getSalary())

ivan.setRate(20)
ivan.setDays(10)

console.log(ivan.getSalary())
