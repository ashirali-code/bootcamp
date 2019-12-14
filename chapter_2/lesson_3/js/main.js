// let person = {
//     name: 'Jack',
//     sayHello: function() {
//         // let result = 'Hello ' + this.name;
//         // console.log(result);

//         let person2 = {
//             name: 'Paul',
//             sayHello: () => {
//                 let result2 = 'Hello ' + this.name;
//                 console.log(result2);
//             }
//         }
//         person2.sayHello();
//     }
// }
// person.sayHello();

// const sayHello = () => {
//     console.log(this)
// };

// sayHello();

// var name = 'Jack';

// function sayHello() {
//     console.log(this.name);
// }

// sayHello();

let counter = {
    steps: 0,
    addStep() {
        this.steps++
        let name = {};
        return this.steps
    },
    clearSteps() {
        this.steps = 0;
        let name = false;

        return this.steps
    },
    addManySteps(countOfSteps) {
        this.steps += countOfSteps;

        return this.steps;
    },
    addManyStepsBystep(countOfSteps) {
        for(let i = 0; i < countOfSteps; i++) {
            this.addStep();
        }
    }
}

counter.addStep();
counter.addStep();
counter.addManySteps(5);
counter.addManyStepsBystep(3);

console.log(counter.steps);

console.log(counter.clearSteps());