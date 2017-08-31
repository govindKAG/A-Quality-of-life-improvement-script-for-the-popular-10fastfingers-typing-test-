// paste the script in the console , a new input field should appear, use that to set the permissible number of
// errors. When you make that many errors , the page should auto restart.

// keep your hands on the home row!
var errorssofar = 0;
var limiter = document.createElement("div");

limiter.innerHTML = '' + '<div class="text-center col-sm-6 col-sm-offset-3">' +
    '<input type="text" class="limiterfield"  id= "limitField" value="3" ><input type="button" class="limiterfield"  id= "lim" value="SET" onclick = "btnclick()">';
document.getElementsByClassName('control-label')[0].appendChild(limiter);
var allowed = document.getElementById("limitField").value;
$("#inputfield").keydown(function(a) {
    if (a.keyCode == 32) {
        if ($("#inputfield").val() != $(".highlight").text()) {
            errorssofar++;
        }
        if (errorssofar > parseInt(allowed)) {
            $("#reload-btn").click();
            errorssofar = 0;
        }
    }
});

function btnclick() {
    allowed = document.getElementById('limitField').value;
}
