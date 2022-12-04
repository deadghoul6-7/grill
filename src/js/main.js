
// animate on scroll
const animItems = document.querySelectorAll('.anim');

if (animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(event) {
    for(let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - (animItemHeight / animStart);

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
      scrollLeft = el.offsetX || document.documentElement.scrollLeft,
      scrollTop = el.offsetY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animOnScroll();
}

// delay elements

const item__time = document.querySelector('.item__time');
item__time.style.setProperty('--animate-delay', '0.3s');

const item__email = document.querySelector('.item__email');
item__email.style.setProperty('--animate-delay', '0.4s');

const phone__block = document.querySelector('.phone-block');
phone__block.style.setProperty('--animate-delay', '0.4s');

const icons = document.querySelector('.icons');
icons.style.setProperty('--animate-delay', '0.3s');

const main__text__in__block__1 = document.querySelector('.main-text-in-block-1');
main__text__in__block__1.style.setProperty('--animate-delay', '0.5s');

const links__block__1__a2 = document.querySelector('.links__block__1__a2');
links__block__1__a2.style.setProperty('--animate-delay', '0.8s');

const links__block__1__a3 = document.querySelector('.links__block__1__a3');
links__block__1__a3.style.setProperty('--animate-delay', '0.6s');

const line__block__1 = document.querySelector('.line-block-1');
line__block__1.style.setProperty('--animate-delay', '1.2s');

const moving__stick__block__1 = document.querySelector('.moving-stick-block-1');
moving__stick__block__1.style.setProperty('--animate-delay', '1.2s');

const elem__1__block__1 = document.getElementById('elem-1-block-1');
elem__1__block__1.style.setProperty('--animate-delay', '1.3s');

const elem__2__block__1 = document.getElementById('elem-2-block-1');
elem__2__block__1.style.setProperty('--animate-delay', '1.4s');

const elem__3__block__1 = document.getElementById('elem-3-block-1');
elem__3__block__1.style.setProperty('--animate-delay', '1.5s');

const elem__4__block__1 = document.getElementById('elem-4-block-1');
elem__4__block__1.style.setProperty('--animate-delay', '1.6s');



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


// $('.slider').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   adaptiveHeight: false,
//   prevArrow: $('.prev-arrow-block7'),
//   nextArrow: $('.next-arrow-block7'),
//   responsive: [
//   {
//   breakpoint: 1024,
//   settings: {
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     infinite: false,
//     adaptiveHeight: false,
//     prevArrow: $('.prev-arrow-block7'),
//     nextArrow: $('.next-arrow-block7'),
//     dots: false
//   }
//   },
//   {
//   breakpoint: 600,
//   settings: {
//     slidesToShow: 2,
//     adaptiveHeight: false,
//     prevArrow: $('.prev-arrow-block7'),
//     nextArrow: $('.next-arrow-block7'),
//     slidesToScroll: 2
    
//   }
//   },
//   {
//   breakpoint: 480,
//   settings: {
//     slidesToShow: 1,
//     adaptiveHeight: false,
//     prevArrow: $('.prev-arrow-block7'),
//     nextArrow: $('.next-arrow-block7'),
//     slidesToScroll: 1
//   }
//   }
//   // You can unslick at a given breakpoint now by adding:
//   // settings: "unslick"
//   // instead of a settings object
//   ]
//   });




  });
  $(document).ready(function(){
    $('.slider-block7').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      prevArrow: $('.prev-arrow-block7'),
      nextArrow: $('.next-arrow-block7'),
    });
  });

  $(document).ready(function(){
    $('.slider_block6 ').slick({

     
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
     
      adaptiveHeight: true,
      variableWidth: true,
      prevArrow: $('.prev-arrow-block6'),
      nextArrow: $('.next-arrow-block6'),

      responsive: [
        {
          breakpoint: 1190,
          settings: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
           
            adaptiveHeight: false,
            variableWidth: false,
          
        }
        },
        {
          breakpoint: 900,
          settings: {
          slidesToShow: 1,
          infinite: true,
          daptiveHeight: false,
          variableWidth: false,
        
          slidesToScroll: 1
          
        }
        },
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
      

      }
    );
  
  });