$(function () {
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
        $('.moving-stick-block-1').css('margin-left','60px');
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
         $('.moving-stick-block-1').css('margin-left', (a.left + (ew / 2)-12  +'px'));
      }
     });
      $("#elem-3-block-1").mouseout(function(){
        $('.moving-stick-block-1').css('margin-left','60px');
     });
     $("#elem-4-block-1").mouseover(function(){
        var a = document.querySelector('#elem-4-block-1').getBoundingClientRect();
        let user_width = document.querySelector('main');
        let elem_width = document.querySelector('#elem-4-block-1');
        var uw = user_width.clientWidth;
        var ew = elem_width.clientWidth;
        var result = uw - a.left - ew;
        $('.moving-stick-block-1').css('margin-left', (a.left - result + (ew / 2) +'px'));
     });
      $("#elem-4-block-1").mouseout(function(){
         
        $('.moving-stick-block-1').css('margin-left','60px');
     });
});

