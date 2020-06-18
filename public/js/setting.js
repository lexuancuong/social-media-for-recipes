$(function(){
    $('#btn-change-email').on('click',function(){
        if($('#change-email').css("display") == "flex"){
            $('#change-email').css("display",'none');}
        else $('#change-email').css("display",'flex');
    });
    $('#btn-change-password').on('click',function(){
        if($('#change-password').css("display") == "flex"){
            $('#change-password').css("display",'none');}
        else $('#change-password').css("display",'flex');
    });
});
