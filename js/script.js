$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#sticky-nav').fadeIn(500);
        } else {
            $('#sticky-nav').fadeOut(500);
        }
    });
    $(".js--wp-1").waypoint(function (direction) {
        $(".js--wp-1").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });
});
