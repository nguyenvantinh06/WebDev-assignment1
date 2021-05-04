$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(".navbar").position()) {
            $(".navbar").removeClass('sticky');
        }
        else {
            $(".navbar").addClass('sticky');
        }
    });
});