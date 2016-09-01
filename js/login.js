$(document).on('click', 'a[href="#members"]', function(event){
    event.preventDefault();

    $("#shade").addClass("shade");
    $("#members").removeClass("hidden");
    $("#members").addClass("show");

    $("#shade").click(function() {
      $("#shade").removeClass("shade");
      $("#members").removeClass("show");
      $("#members").addClass("hidden");
      $("#inc-pass").addClass("hidden");
      $("#inc-pass").removeClass("show");
    });
});

$(document).ready(function() {

    // process the form
    $("#login-form").submit(function(event) {
      event.preventDefault();

        var formData = {
            "passphrase" : $("#passphrase").val(),
        };
        // process the form
        $.ajax({
            type        : 'POST',
            url         : 'php/members.php', // the url where we want to POST
            data        : formData,
            dataType    : 'json',
            encode      : true
        })
            .done(function(data) {

                if(data["success"]) {
                  $(location).attr('href',data["link"]);
                }
                else {
                  $("#inc-pass").removeClass("hidden");
                  $("#inc-pass").addClass("show");
                }


            });

    });

});
