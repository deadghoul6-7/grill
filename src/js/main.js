
// слайдер 1

$(document).ready(function(){

    let back = document.getElementById('back');

    $('.navbar-toggler').click(function(even){
      $('.header').toggleClass('flag');
      $('.navbar-toggler').toggleClass('menu-active');
    });

      $('.gallery').slick({
dots: false,
infinite: false,
speed: 300,
slidesToShow: 4,
slidesToScroll: 4,
adaptiveHeight: true,
prevArrow: false,
nextArrow: false,
responsive: [
{
breakpoint: 1024,
settings: {
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: false,
  prevArrow: false,
  nextArrow: false,
  dots: false
}
},
{
breakpoint: 600,
settings: {
  slidesToShow: 2,
  prevArrow: false,
  nextArrow: false,
  slidesToScroll: 2
  
}
},
{
breakpoint: 480,
settings: {
  slidesToShow: 1,
  prevArrow: false,
  nextArrow: false,
  slidesToScroll: 1
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
  });