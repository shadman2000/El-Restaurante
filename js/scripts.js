/*global $*/
/*global ready*/
$(document).ready(function(){
    $("#slogan").typeIt({
        speed: 100,
        lifeLike: true,
    });
    $(".scrolla").scrolla({
        mobile:true
    });
    $('.scrollspy').scrollSpy({
        scrollOffset:400
    });
})
