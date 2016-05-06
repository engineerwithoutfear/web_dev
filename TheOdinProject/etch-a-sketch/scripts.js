$(document).ready(function() {
    //container
    $('body').prepend('<div class = "sketch_container"></div>')

    //make grid squares
    for(var i = 0; i < 16; i++) {
        $(".sketch_container").append("<div class='square'></div>");
        }
    // make 'em change on hover-over
    
    });
