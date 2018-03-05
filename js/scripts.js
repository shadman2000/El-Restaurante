/*global $*/
/*global ready*/
$(document).ready(function(){
    $("#slogan").typeIt({
        speed: 100,
        lifeLike: true,
    });
    $(".scrolla , #texti , #bfh, #sh, #sf, #dt").scrolla({
        mobile:true
    });
    $('.scrollspy').scrollSpy({
        scrollOffset:400
    });
    $('#sec3').scrollSpy({
        scrollOffset:0
    });
    $('#sec3').paroller();
    $('#pushed').paroller();
    $('select').material_select();
})
