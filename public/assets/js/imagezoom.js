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

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            },
            1300: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
})

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

var $ = jQuery.noConflict();

$(document).ready(function() {

    // Image zoom plugin code
    var zoomImage = $('#imageZoom');
    var zoomImageExtra = $('#imageZoomExtra');
    var zoomImagePlus = $('#imageZoomExtraPlus');
    var zoomImages = $('.zoom-images');

    zoomImage.imageZoom();
    // zoomImageExtra.imageZoom({ zoom: 200 });
    // zoomImagePlus.imageZoom({ zoom: 300 });

    zoomImages.each(function() {
        $(this).imageZoom();
    });

    $(".image_list").click(function() {

        // var image = ($(this).attr("src"));
        var image = $(this).children('img').attr('src');
        $('#imageZoom').attr('src', image);
        $('.containerZoom').css("background-image", "url(" + image + ")");
    });

    $('.cart_icon_header').click(function() {
        $('#cart_section').addClass("right_zero");
    })

});