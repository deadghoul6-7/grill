
// слайдер 1


const animItems = document.querySelectorAll('.anim');

if (anim.length > 0){
  document.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for(let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){
        animItem.classList.add('animate__animated');
      }
      else{
        animItem.classList.remove('animate__animated');
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = windiw.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
}




$(document).ready(function(){

    let back = document.getElementById('back');

    $('.navbar-toggler').click(function(even){
      $('.header').toggleClass('flag');
      $('.navbar-toggler').toggleClass('menu-active');
    });

      $('.gallery').slick({
dots: false,
infinite: true,
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
  adaptiveHeight: true,
  prevArrow: false,
  nextArrow: false,
  dots: false
}
},
{
breakpoint: 600,
settings: {
  slidesToShow: 2,
  adaptiveHeight: true,
  prevArrow: false,
  nextArrow: false,
  slidesToScroll: 2
  
}
},
{
breakpoint: 480,
settings: {
  slidesToShow: 1,
  adaptiveHeight: true,
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