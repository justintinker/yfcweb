
$(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();

    var offset = $( $.attr(this, 'href') ).offset().top;

    $('html, body').animate({
        scrollTop: offset
    }, 1000);



});
