/*10. Необходимо создать объект, который будет представлять из себя лифт. У него
должны быть методы:
● toFloor - принимает целое числовое значение от 1 до 16 - переместиться на
определенный этаж.
● printFloor - печатает текущий этаж, на котором находится лифт
● upOneFloor - перемещает на один этаж вверх
● downOneFloor - перемещает на один этаж вниз
Изначально лифт находится на первом этаже. Когда мы вызываем метод toFloor(),
программа должна в консоли отобразить постепенное перемещение лифта на нужный этаж
(только в этом методе).
Пример:

Elevator.toFloor(4);

// Elevator is on the floor 1
// Elevator is on the floor 2
// Elevator is on the floor 3
// Elevator is on the floor 4

Elevator.toFloor(6);

// Elevator is on the floor 4
// Elevator is on the floor 5
// Elevator is on the floor 6

Elevator.oneFloorUp();

Elevator.printFloor();

// Elevator is on the floor 7

Указания:
● Лифт должен хранить текущий этаж, на котором он находится.
● Для наглядности, вызовите метод toFloor несколько раз в программе.
● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.
● Сдавать в виде HTML-файла */

let lift = {
    currentFloor: 1,
    minFloor: 1,
    maxFloor: 16,

    upOneFloor() {
        if(this.currentFloor < this.maxFloor){
            this.currentFloor++
            this.printFloor()
        }else {
            console.log('Вы ввели не правельный этаж')
            return
        }

    },
    downOneFloor(){
        if(this.currentFloor > this.minFloor){
            this.currentFloor--
            this.printFloor()
        }else {
            console.log('Вы ввели не правельный этаж')
            return            
        }
    },
    printFloor(){
        console.log('Вы на ' + this.currentFloor + ' этаже')
    },
    toFloor(countOfFloor){
        while(this.currentFloor != countOfFloor){
            if(countOfFloor > this.currentFloor && countOfFloor <= this.maxFloor){
                this.upOneFloor()
            }else if (countOfFloor < this.currentFloor && countOfFloor >= this.minFloor){
                this.downOneFloor()
            }else {
                console.log('Вы ввели не правельный этаж')
                return
            }
          
        }
    }
}
    lift.upOneFloor();
    lift.downOneFloor();
    lift.toFloor(9);
    lift.toFloor(5)
    lift.toFloor(19);
    //     lift.downOneFloor();
    //     lift.downOneFloor();
    // lift.toFloor(15);
    // lift.upOneFloor();
    // lift.upOneFloor();