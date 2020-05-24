$(function(){
  $('.dropdown-group-category > .dropdown-group-category-name').on('click', function() {
    $(this).parent().toggleClass('open');
    $('.icon-group').toggleClass('rotate');
  //   console.log($('.icon').css("transform"));
  //   if ($('.icon').css("transform") != 'rotate(90deg)'){
  //         $('.icon').css("transform","rotate(90deg)");
  //     }
  //     else {
  //         console.log(2);
  //         $('.icon').css("transform","rotate(-180deg)");
  //     }
  });
  
  $('.dropdown-group-category > .list > .item').on('click', function() {
    $('.dropdown-group-category > .list > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.dropdown-group-category-name').text( $(this).text() );
  });
  
  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.dropdown-group-category').removeClass('open');
    }
  });
  
  $(document).on('click', function(evt) {
    if ( $(evt.target).closest(".dropdown-group-category > .dropdown-group-category-name").length === 0 ) {
      $('.dropdown-group-category').removeClass('open');
      $('.icon-group').removeClass('rotate');

    }
  }); 
});



$(function(){
    $('.dropdown-category > .dropdown-category-name').on('click', function() {
      $(this).parent().toggleClass('open');
      $('.icon-category').toggleClass('rotate');
    //   console.log($('.icon').css("transform"));
    //   if ($('.icon').css("transform") != 'rotate(90deg)'){
    //         $('.icon').css("transform","rotate(90deg)");
    //     }
    //     else {
    //         console.log(2);
    //         $('.icon').css("transform","rotate(-180deg)");
    //     }
    });
    
    $('.dropdown-category > .list > .item').on('click', function() {
      $('.dropdown-category > .list > .item').removeClass('selected');
      $(this).addClass('selected').parent().parent().removeClass('open').children('.dropdown-category-name').text( $(this).text() );
    });
    
    $(document).on('keyup', function(evt) {
      if ( (evt.keyCode || evt.which) === 27 ) {
        $('.dropdown-category').removeClass('open');
      }
    });
    
    $(document).on('click', function(evt) {
      if ( $(evt.target).closest(".dropdown-category > .dropdown-category-name").length === 0 ) {
        $('.dropdown-category').removeClass('open');
        $('.icon-category').removeClass('rotate');

      }
    }); 
  });

