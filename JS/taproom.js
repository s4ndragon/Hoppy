$(document).ready(function(){
    //slick
    $('.taproom_pics').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false
                    // centerMode: true,
                    // centerPadding: '40px',
                    // slidesToShow: 3
                }
            }
        ]
    });
})