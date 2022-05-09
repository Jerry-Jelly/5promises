$(document).ready(function(){

  // 네비게이션
  $('.square').hide(); 
  $('.sub').hide(); 

  $('nav').mouseenter(function(){
    $('.square').stop().slideDown();
    $('.sub').stop().slideDown();
  });

  $('nav').mouseleave(function(){
    $('.sub').stop().slideUp();
    $('.square').stop().slideUp();
  });




  // 진료정보
  $('.info_con span').hide();

  $('.info_con > li').mouseenter(function(){
    $(this).find('p:nth-child(2)').css('color','#5da1ff');
    $(this).find('p:nth-child(2)').css('text-decoration','overline 1.5px solid #5da1ff');
    $(this).find('p:nth-child(2)').css('font-weight','bold');
    $(this).find('p:last-child').css('color','#5da1ff');
    $(this).find('p:last-child > span').stop().fadeIn();
  });

  $('.info_con > li').mouseleave(function(){
    $(this).find('p:nth-child(2)').css('color','#fff');
    $(this).find('p:nth-child(2)').css('text-decoration','none');
    $(this).find('p:nth-child(2)').css('font-weight','lighter');
    $(this).find('p:last-child').css('color','#fff');
    $(this).find('p:last-child > span').fadeOut();
  });




  //슬라이드
  // $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');
  // $('.slide > ul').css('margin-left','-1920px');

  // function moveSlide(){
  //   $('.slide > ul').animate({'margin-left':'-3840px'},500,function(){
  //     $('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
  //     $('.slide > ul').css('margin-left','-1920px');
  //   });
  // }




  // 의료진소개
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    //$('.status').text(sPos);

    if(sPos>=400){
      $('.info_con01').animate({'opacity':'1'},1000);
      $('.info_con02').animate({'opacity':'1'},1100);
      $('.info_con03').animate({'opacity':'1'},1200);
      $('.info_con04').animate({'opacity':'1'},1300);
      $('.info_con05').animate({'opacity':'1'},1400);
    }
    if(sPos>=1500){
      $('.doc_txt').animate({'opacity':'1'},1000);
    }
    if(sPos>=2800){
      // 내부모습
       $('.inside01').animate({'opacity':'1'},100);
       $('.inside02').animate({'opacity':'1'},500);
       $('.inside03').animate({'opacity':'1'},900);
       $('.inside04').animate({'opacity':'1'},1100);
       $('.inside05').animate({'opacity':'1'},1500);
       $('.inside06').animate({'opacity':'1'},1900);
       $('.inside07').animate({'opacity':'1'},2100);
       $('.inside08').animate({'opacity':'1'},2500);
       $('.inside09').animate({'opacity':'1'},2900);
    }
  });




  // 이벤트
  $('.event_img > li:last-child').insertBefore('.event_img > li:first-child');
  $('.event_img').css('margin-left','-300px');

  function moveSlide(){
    $('.event_img').animate({'margin-left':'-600px'},500,function(){
      $('.event_img > li:first-child').insertAfter('.event_img > li:last-child');
      $('.event_img').css('margin-left','-300px');
    });
  }
  let Timer = setInterval(moveSlide, 3000);





  // 약속, 소개 탭 컨텐츠
  $('.promise01').click(function(){
    $('.promise01').css('background','#2b75e0').css('color','#fff');
    $('.promise02').css('background','#fff').css('color','#333');
    $('.promise03').css('background','#fff').css('color','#333');
    $('.promise04').css('background','#fff').css('color','#333');
    $('.promise05').css('background','#fff').css('color','#333');
    $('.promise06').css('background','#fff').css('color','#333');
    $('.promise07').css('background','#fff').css('color','#333');
    $('.promise_txt01').css('z-index','5');
    $('.promise_txt02').css('z-index','1');
    $('.promise_txt03').css('z-index','1');
    $('.promise_txt04').css('z-index','1');
    $('.promise_txt05').css('z-index','1');
    $('.promise_txt06').css('z-index','1');
    $('.promise_txt07').css('z-index','1');
  });

  $('.promise02').click(function(){
    $('.promise01').css('background','#fff').css('color','#333');
    $('.promise02').css('background','#2b75e0').css('color','#fff');
    $('.promise03').css('background','#fff').css('color','#333');
    $('.promise04').css('background','#fff').css('color','#333');
    $('.promise05').css('background','#fff').css('color','#333');
    $('.promise06').css('background','#fff').css('color','#333');
    $('.promise07').css('background','#fff').css('color','#333');
    $('.promise_txt01').css('z-index','1');
    $('.promise_txt02').css('z-index','5');
    $('.promise_txt03').css('z-index','1');
    $('.promise_txt04').css('z-index','1');
    $('.promise_txt05').css('z-index','1');
    $('.promise_txt06').css('z-index','1');
    $('.promise_txt07').css('z-index','1');
  });

  $('.promise03').click(function(){
    $('.promise01').css('background','#fff').css('color','#333');
    $('.promise02').css('background','#fff').css('color','#333');
    $('.promise03').css('background','#2b75e0').css('color','#fff');
    $('.promise04').css('background','#fff').css('color','#333');
    $('.promise05').css('background','#fff').css('color','#333');
    $('.promise06').css('background','#fff').css('color','#333');
    $('.promise07').css('background','#fff').css('color','#333');
    $('.promise_txt01').css('z-index','1');
    $('.promise_txt02').css('z-index','1');
    $('.promise_txt03').css('z-index','5');
    $('.promise_txt04').css('z-index','1');
    $('.promise_txt05').css('z-index','1');
    $('.promise_txt06').css('z-index','1');
    $('.promise_txt07').css('z-index','1');
  });

  $('.promise04').click(function(){
    $('.promise01').css('background','#fff').css('color','#333');
    $('.promise02').css('background','#fff').css('color','#333');
    $('.promise03').css('background','#fff').css('color','#333');
    $('.promise04').css('background','#2b75e0').css('color','#fff');
    $('.promise05').css('background','#fff').css('color','#333');
    $('.promise06').css('background','#fff').css('color','#333');
    $('.promise07').css('background','#fff').css('color','#333');
    $('.promise_txt01').css('z-index','1');
    $('.promise_txt02').css('z-index','1');
    $('.promise_txt03').css('z-index','1');
    $('.promise_txt04').css('z-index','5');
    $('.promise_txt05').css('z-index','1');
    $('.promise_txt06').css('z-index','1');
    $('.promise_txt07').css('z-index','1');
  });

  $('.promise05').click(function(){
    $('.promise01').css('background','#fff').css('color','#333');
    $('.promise02').css('background','#fff').css('color','#333');
    $('.promise03').css('background','#fff').css('color','#333');
    $('.promise04').css('background','#fff').css('color','#333');
    $('.promise05').css('background','#2b75e0').css('color','#fff');
    $('.promise06').css('background','#fff').css('color','#333');
    $('.promise07').css('background','#fff').css('color','#333');
    $('.promise_txt01').css('z-index','1');
    $('.promise_txt02').css('z-index','1');
    $('.promise_txt03').css('z-index','1');
    $('.promise_txt04').css('z-index','1');
    $('.promise_txt05').css('z-index','5');
    $('.promise_txt06').css('z-index','1');
    $('.promise_txt07').css('z-index','1');
  });

  $('.promise06').click(function(){
    $('.promise01').css('background','#fff').css('color','#333');
    $('.promise02').css('background','#fff').css('color','#333');
    $('.promise03').css('background','#fff').css('color','#333');
    $('.promise04').css('background','#fff').css('color','#333');
    $('.promise05').css('background','#fff').css('color','#333');
    $('.promise06').css('background','#2b75e0').css('color','#fff');
    $('.promise07').css('background','#fff').css('color','#333');
    $('.promise_txt01').css('z-index','1');
    $('.promise_txt02').css('z-index','1');
    $('.promise_txt03').css('z-index','1');
    $('.promise_txt04').css('z-index','1');
    $('.promise_txt05').css('z-index','1');
    $('.promise_txt06').css('z-index','5');
    $('.promise_txt07').css('z-index','1');
  });

  $('.promise07').click(function(){
    $('.promise01').css('background','#fff').css('color','#333');
    $('.promise02').css('background','#fff').css('color','#333');
    $('.promise03').css('background','#fff').css('color','#333');
    $('.promise04').css('background','#fff').css('color','#333');
    $('.promise05').css('background','#fff').css('color','#333');
    $('.promise06').css('background','#fff').css('color','#333');
    $('.promise07').css('background','#2b75e0').css('color','#fff');
    $('.promise_txt01').css('z-index','1');
    $('.promise_txt02').css('z-index','1');
    $('.promise_txt03').css('z-index','1');
    $('.promise_txt04').css('z-index','1');
    $('.promise_txt05').css('z-index','1');
    $('.promise_txt06').css('z-index','1');
    $('.promise_txt07').css('z-index','5');
  });




  // 공지사항 번호 클릭
  $('.promise06_no > span:first-child').click(function(){
    $(this).css('color','#2b75e0');
    $('.promise06_no > span:nth-child(2)').css('color','#333');
    $('.promise06_no > span:nth-child(3)').css('color','#333');
    $('.promise_txt06 > table:first-child').css('z-index','5');
    $('.promise_txt06 > table:nth-child(2)').css('z-index','1');
    $('.promise_txt06 > table:nth-child(3)').css('z-index','1');
  });

  $('.promise06_no > span:nth-child(2)').click(function(){
    $('.promise06_no > span:first-child').css('color','#333');
    $(this).css('color','#2b75e0');
    $('.promise06_no > span:nth-child(3)').css('color','#333');
    $('.promise_txt06 > table:first-child').css('z-index','1');
    $('.promise_txt06 > table:nth-child(2)').css('z-index','5');
    $('.promise_txt06 > table:nth-child(3)').css('z-index','1');
  });

  $('.promise06_no > span:nth-child(3)').click(function(){
    $('.promise06_no > span:first-child').css('color','#333');
    $('.promise06_no > span:nth-child(2)').css('color','#333');
    $(this).css('color','#2b75e0');
    $('.promise_txt06 > table:first-child').css('z-index','1');
    $('.promise_txt06 > table:nth-child(2)').css('z-index','1');
    $('.promise_txt06 > table:nth-child(3)').css('z-index','5');
  });




});