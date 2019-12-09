var radius = prompt('Введите радиус круга');
var a = ('s=' +(radius * radius) * Math.PI) +'^2';
var b = ('p=' +(Math.PI * 2) * radius);
alert(a + '\n' + b);

// 's' - площадь
// 'p' - окружность
// '\n'- чтобы вниз опустил 