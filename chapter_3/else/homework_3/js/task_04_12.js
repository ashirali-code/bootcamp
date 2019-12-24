
let washer = document.querySelector('.frf');

washer.onmousedown = function(e) {

    let coords = getCoords(washer);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    washer.style.position = 'absolute';
    document.body.appendChild(washer); 
    moveAt(e);

    washer.style.zIndex = 1000;  

    function moveAt(e) {
        washer.style.left = e.pageX - shiftX + 'px';
        washer.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    washer.onmouseup = function() {
        document.onmousemove = null;
        washer.onmouseup = null;
    };

}

washer.ondragstart = function() {
    return false;
};

function getCoords(elem) { 
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
