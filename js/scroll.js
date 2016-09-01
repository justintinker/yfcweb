$(document).on('click', 'a[href^="#"]:not(a[href="members"])', function(event){
    event.preventDefault();

    var offset = $( $.attr(this, 'href') ).offset().top;

    $('html, body').animate({
        scrollTop: offset
    }, 1000);
});

$(document).on('click', 'a[href="#members"]', function(event){
    event.preventDefault();

    $("#shade").addClass("shade");
    $("#members").removeClass("hidden");
    $("#members").addClass("show");

    $("#shade").click(function() {
      $("#shade").removeClass("shade");
      $("#members").removeClass("show");
      $("#members").addClass("hidden");
    });
});
