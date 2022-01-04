document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
// DOMContentLoaded  end
console.log('onload');





var $ = jQuery.noConflict();

$(document).ready(function() {

    // Image zoom plugin code
    // var zoomImage = $('#imageZoom');
    // var zoomImageExtra = $('#imageZoomExtra');
    // var zoomImagePlus = $('#imageZoomExtraPlus');
    // var zoomImages = $('.zoom-images');

    // zoomImage.imageZoom();
    // zoomImageExtra.imageZoom({ zoom: 200 });
    // zoomImagePlus.imageZoom({ zoom: 300 });

    // zoomImages.each(function() {
    //     $(this).imageZoom();
    // });



});

$(function() {
    $("#slider-4").slider({
        orientation: "vertical"
    });
    $("#slider-4").slider('disable');
    $("#slider-5").slider({
        orientation: "vertical",
        value: 50,
        slide: function(event, ui) {
            $("#minval").val(ui.value);
        }
    });
    $("#minval").val($("#slider-5").slider("value"));
});