$(document).on('click', 'a[href^="#"]:not(a[href="members"])', function(event){
    event.preventDefault();

    var offset = $( $.attr(this, 'href') ).offset().top;

    $('html, body').animate({
        scrollTop: offset
    }, 1000);
});
