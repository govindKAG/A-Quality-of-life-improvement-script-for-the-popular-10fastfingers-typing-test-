var errorssofar = 0;
var allowed = 3;


$("#inputfield").keydown(function(a) {
    if (a.keyCode == 32) {
        if ($("#inputfield").val() != $(".highlight").text()) {
            errorssofar++;
        }
        if (errorssofar > allowed) {
            $("#reload-btn").click();

        }
    }
});
