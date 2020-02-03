// /*ES6*/

// class Animal {
//   constructor(color, voice) {
//     this.voice = voice
//     this.color = color
//   }

//   static type = 'This is an Animal class'

//   sayVoice() {
//     alert('This animal say' + this.voice)
//   }
// }

// class Dog extends Animal {
//   constructor(name, type, color, voice){
//     super(color, voice)
//     this.name = name
//     this.type = type
//   }
  
//   givePaw() {
//     alert(`${this.name} give to you paw`)
//   }
// }

// const dog = new Dog ('taigan', 'hatiko', 'bob')

// // dog.sayVoice()

// console.log(Animal.type)


/*ES5*/

// function Animal(color, voice) {
//   this.voice = voice
//   this.color = color
// }

// Animal.type =  'This is Animal'

// Animal.prototype.sayVoice = function() {
//   alert('This animal say' + this.voice)
// }

// function Dog(name, type, color, voice = 'gav') {
//   Animal.call(this, color, voice) /*call вызывает один раз внутри dog a*/
//   this.name = name
//   this.type = type
// }

// // Dog.prototype = Animal.call()

// Dog.prototype = Animal.prototype

// Dog.prototype.givePaw = function() {
//   alert(`${this.name} give to you paw`)
// }

// const dog = new Dog('taigan', 'hatiko', 'bob')

// dog.givePaw()

// console.log(Animal.type)

/**************контекст*/

// const obj = new Object()

// obj.name = 'First name'

// console.log(obj)

const obj = {
  type: 'Human',
  sex: 'male',
  person() {
    const obj2 = {
      name: 'Jack',
      height: 170,
      position
    }
  }
}

obj.person.whoIsWhak()