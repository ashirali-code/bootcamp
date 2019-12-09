function subsetString(dog) {
    var subsetArr = [];
  
    for (var i = 0; i < dog.length; i++) {
      for (var j = i + 1; j < dog.length + 1; j++) {
        subsetArr.push(dog.slice(i,j))
      }
    }
  
    return subsetArr;
  }
  
  console.log(subsetString('dog'));


  // var dog = prompt('Введите слово')
  // var newArr = []

  // for(var y = 0; < dog.length; y++) {
  //   for(var x = 0; x < dog.length-y; x++){
  //   newArr.push(dog.slice(y,dog.length - x))
  //   }
  // }
  // console.log(newArr)

// function subsetString(word) {
//     var subsetArr = [];
  
//     for (var i = 0; i < word.length; i++) {
//       for (var j = i + 1; j < word.length + 1; j++) {
//         subsetArr.push(word.slice(i,j))
//       }
//     }
  
//     return subsetArr;
//   }
  
//   console.log(subsetString('doggy'));