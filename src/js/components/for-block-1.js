$(function () {
    $("#elem-2-block-1").mouseover(function(){
        $('.moving-stick-block-1').css('margin-left','415px');
     });
      $("#elem-2-block-1").mouseout(function(){
        $('.moving-stick-block-1').css('margin-left','60px');
     });
     $("#elem-3-block-1").mouseover(function(){
        $('.moving-stick-block-1').css('margin-left','759px');
     });
      $("#elem-3-block-1").mouseout(function(){
        $('.moving-stick-block-1').css('margin-left','60px');
     });
     $("#elem-4-block-1").mouseover(function(){
         let elem = document.querySelector('#elem-4-block-1');
         let rect = elem.getBoundingClientRect();
         let test = document.querySelector('.chain-block-1');
         let test1 = document.querySelector('main');
         var w = test.clientWidth || test.offsetWidth;
         

         let aaa = test.clientWidth - 1200;
         console.log(test1.clientWidth -  test.clientWidth);
         var ddd = test1.clientWidth -  test.clientWidth;
        $('.moving-stick-block-1').css('margin-left', (test.clientWidth - ddd +'px'));
     });
      $("#elem-4-block-1").mouseout(function(){
         
        $('.moving-stick-block-1').css('margin-left','60px');
     });
});