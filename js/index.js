$(window).scroll(function () {
     var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#header").addClass("shrink")
    } else {
        $("#header").removeClass("shrink")
    }
});