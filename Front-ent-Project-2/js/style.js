$('.banner-slide').slick({
    centerMode: true,
    centerPadding: '0px',
    infinite:true,
    autoplay: true,
    arrows:false,
    dots: true
});
$('.pro-slide-img').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});
$('.img-item').slick({
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 1,
    slidesToScroll:1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 1,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});

$(document).ready(function () {
    $('#wel-left').click(function () {
       $('#wel-img-title-2').fadeToggle(1500);
    });
});