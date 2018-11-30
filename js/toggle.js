/**
 * Created by student on 2018/11/23.
 */
$(function(){
        $("#toggle-mobile-dropdown-nav").click(function(){
            $("#mobile-navbar-right").slideDown();
            $(this).css("display","none");
            $("#toggle-mobile-dropdown").css("display","block");
        })
        $("#toggle-mobile-dropdown").click(function(){
            $("#mobile-navbar-right").slideUp();
            $(this).css("display","none");
            $("#toggle-mobile-dropdown-nav").css("display","block");
        })
    $(".wx").mouseover(function(){
          $("#footer_wx_code").fadeIn();
    })
    $(".wx").mouseout(function(){
        $("#footer_wx_code").fadeOut();
    })
    
})