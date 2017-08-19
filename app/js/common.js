/*------------------------аnchor-------------------------*/

 $(document).ready(function(){
    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
/*------------------------аnchor-------------------------*/
jQuery(document).ready(function($){
 
    /* Подготавливаем иконку меню */
    $('.nav-wrap').prepend('<div id="menu-icon"><i class="fa fa-compass" aria-hidden="true"></i><span>Menu</span></div>');
     
    /* Включаем навигацию */
    $("#menu-icon").on("click", function(){
        $(".nav").slideToggle();
        $(this).toggleClass("active");
    });

});
