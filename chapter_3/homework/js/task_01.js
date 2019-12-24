

let strGreen = document.querySelector('strong');

for(let i = 0; i < strGreen.length; i++){
    strGreen[i].style.color = 'green';
};



let source = document.querySelectorAll('a');

for(let i = 0; i < source.length; i++) {
    source[i].style.textDecoration = 'none';
};




for(let i = 0; i < strGreen.length; i++) {
    if(strGreen[i].className === 'some') {
        strGreen[i].className = '';
    } else{
        strGreen[i].className = 'some';
    };
};



let findEm = document.querySelectorAll('em');
for(let i = 0; i < findEm.length; i++){
    findEm[i].className = 'selected';
}



let findMark = document.querySelectorAll('.row mark');

for(let i = 0; i < findMark.length; i++){
        findMark[i].className = ' selected';
}



let deleteClassRow = document.querySelectorAll('.row');
deleteClassRow[1].classList = ' ';



let readSourceColor = document.querySelectorAll('a');
console.log(getComputedStyle(readSourceColor[1]).color)