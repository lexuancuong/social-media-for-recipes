$(function(){
    $('#btnTrigger').click();
    $('.recommend-btn .btn-recommend').on('click',function(){
        $('.all-card-container').css("display",'flex');
        $('.recommend-area-container').animate({marginTop:'0%'},"slow"); 
    });
});
