$(function(){

    //Cấu hình cho noti
    $('.noti-content > .noti-content-name').on('click', function() {
      $(this).parent().toggleClass('open');
    //   console.log($('.icon').css("transform"));
    //   if ($('.icon').css("transform") != 'rotate(90deg)'){
    //         $('.icon').css("transform","rotate(90deg)");
    //     }
    //     else {
    //         console.log(2);
    //         $('.icon').css("transform","rotate(-180deg)");
    //     }
    });
    
    $('.noti-content > .list > .item').on('click', function() {
      $('.noti-content > .list > .item').removeClass('selected');
      // $(this).addClass('selected').parent().parent().removeClass('open').children('.noti-content-name').text( $(this).text() );
    });
    
    $(document).on('keyup', function(evt) {
      if ( (evt.keyCode || evt.which) === 27 ) {
        $('.noti-content').removeClass('open');
      }
    });
    
    $(document).on('click', function(evt) {
      if ( $(evt.target).closest(".noti-content > .noti-content-name").length === 0 ) {
        $('.noti-content').removeClass('open');
      }
    }); 


    //Cấu hình cho việc click nút 3 bars
    $('.menu > .menu-name').on('click', function() {
      $(this).parent().toggleClass('open');
    //   console.log($('.icon').css("transform"));
    //   if ($('.icon').css("transform") != 'rotate(90deg)'){
    //         $('.icon').css("transform","rotate(90deg)");
    //     }
    //     else {
    //         console.log(2);
    //         $('.icon').css("transform","rotate(-180deg)");
    //     }
    });
    
    $('.menu > .list > .item').on('click', function() {
      $('.menu > .list > .item').removeClass('selected');
      // $(this).addClass('selected').parent().parent().removeClass('open').children('.menu-name').text( $(this).text() );
    });
    
    $(document).on('keyup', function(evt) {
      if ( (evt.keyCode || evt.which) === 27 ) {
        $('.menu').removeClass('open');
      }
    });
    
    $(document).on('click', function(evt) {
      if ( $(evt.target).closest(".menu > .menu-name").length === 0 ) {
        $('.menu').removeClass('open');
      }
    }); 
});

