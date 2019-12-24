let marginRight = 10;
$('#left').on('click', () => {
    $('h1').css('margin-right', marginRight + 'px')
    marginRight += 100;
});

$('#right').on('click', () => {
    $('h1').css('margin-left', '100px')
})