$(document).ready(function() {

    // process the form
    $("#login-form").submit(function(event) {
      event.preventDefault();

        var formData = {
            'passphrase' : $("#passphrase").val(),
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

                console.log(data);

            });

    });

});
