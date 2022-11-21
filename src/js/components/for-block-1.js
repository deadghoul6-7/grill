
$(function () {
   let block_widht = document.querySelector('.chain-block-1');
   var bw = block_widht.clientWidth;
   $('.moving-stick-block-1').css('margin-left',bw / 2 +'px');

   $("#elem-1-block-1").mouseover(function(){
      var a = document.querySelector('#elem-1-block-1').getBoundingClientRect();
      let user_width = document.querySelector('main');
     var uw = user_width.clientWidth;
     
      if(uw > 1200)
      {
         $('.moving-stick-block-1').css('margin-left','60px');
      }
      else{
         $('.moving-stick-block-1').css('margin-left', '60px');
      }
     });
      $("#elem-1-block-1").mouseout(function(){
        $('.moving-stick-block-1').css('margin-left',bw / 2  +'px');
     });



   $("#elem-2-block-1").mouseover(function(){
     var a = document.querySelector('#elem-2-block-1').getBoundingClientRect();
     let user_width = document.querySelector('main');
     var uw = user_width.clientWidth;
    
     if(uw > 1200)
     {
        $('.moving-stick-block-1').css('margin-left','415px');
     }
     else{
        $('.moving-stick-block-1').css('margin-left', (a.left +14  +'px'));
     }
    });
     $("#elem-2-block-1").mouseout(function(){
       $('.moving-stick-block-1').css('margin-left',bw / 2  +'px');
    });




    $("#elem-3-block-1").mouseover(function(){
     var a = document.querySelector('#elem-3-block-1').getBoundingClientRect();
     let user_width = document.querySelector('main');
     let elem_width = document.querySelector('#elem-3-block-1');
     var uw = user_width.clientWidth;
     var ew = elem_width.clientWidth;

     if(uw > 1200)
     {
        $('.moving-stick-block-1').css('margin-left','759px');
     }
     else{
        $('.moving-stick-block-1').css('margin-left', (a.left + /*(ew / 2)*/41   +'px'));
        console.log(a.left + (ew / 2));
        console.log(a.left);
        console.log((ew / 2));
     }
    });
     $("#elem-3-block-1").mouseout(function(){
       $('.moving-stick-block-1').css('margin-left',bw / 2  +'px');
    });




    $("#elem-4-block-1").mouseover(function(){
       var a = document.querySelector('#elem-4-block-1').getBoundingClientRect();
       let user_width = document.querySelector('main');
       let elem_width = document.querySelector('#elem-4-block-1'); 
       let eww = document.getElementById('elem-4-block-1');
       let block_width = document.querySelector('chain-block-1');
       let bw = block_widht.clientWidth;
       var uw = user_width.clientWidth;
       var ew = elem_width.clientWidth;
       var result = uw - a.left - ew;
       var ew1 = eww.clientWidth;
      //  $('.moving-stick-block-1').css('margin-left', (a.left - result + (ew / 2) +'px'));
      $('.moving-stick-block-1').css('margin-left', (bw - 50 + 'px'));
    });
     $("#elem-4-block-1").mouseout(function(){
        
       $('.moving-stick-block-1').css('margin-left',bw / 2  +'px');
    });
});
