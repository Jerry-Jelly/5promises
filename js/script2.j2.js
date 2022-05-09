$(document).ready(function(){
    let n = 0;

    function fadeInOut(){
  
      $('.slide > ul > li').fadeOut();
  
      if(n==4){
        n = 0;
      }else{
        n++;
      }
      $('.slide > ul > li').eq(n).stop().fadeIn();
    }
    let Timer = setInterval(fadeInOut, 5000);
});