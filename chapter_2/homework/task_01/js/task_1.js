// Напишите функцию которая принимает массив с названиями стран и возвращает
//    страну с самым длинным названием(затем страну с самым коротким названием)

let countries = [
    "kyrgyzstan",
    "russia",
    "germany",
    "USA"
];

function veryLongCountry(arr){
    let sortArr = arr.sort(function(a,b){
        return a.length - b.length;
    })
    return `${sortArr.pop()} ${sortArr[0]}`
    
}

console.log( veryLongCountry(countries) );


let country = [
    "kyrgyzstan",
    "russia",
    "germany",
    "france"
];


function veryShortCountry(arr){
    let sortArr = arr.sort(function(a,b){
        return b.length - a.length;
    })
    return sortArr.pop()
}


console.log( veryShortCountry(country) );



// const countryArr = ['Russia', 'France', 'Kyrgyzstan', 'USA'];

// function longAndShort(countryList) {
//     countryList.sort(function(a,b) {
//         return a.length - b.length
//     })

//     let leng = countryList.length

//     return countryList[0] + ' ' + countryList[leng - 1]
// }

// const result = longAndShort(countryArr);
// console.log(result);