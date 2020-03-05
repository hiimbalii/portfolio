$(window).scroll(function(){
    if ($('#logo').visible(true)) {
        $('#navbar-logo').toggle()
    } else {
        // The element is NOT visible, do something else
    }
    console.log("scroll")
})
