var arr = [1,0,2,3,4,0,0,0,5]

var arrow1 = arr.filter(function(item){
    return item === 0
})

var arrow2 = arr.filter(function(item){
    return item !== 0
})

var result = arrow2.concat(arrow1)
console.log(result)