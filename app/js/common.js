/*------------------------form--------------------------*/
function validate(){
   //Считаем значения из полей name и email в переменные x и y
   var name=document.forms["form"]["name"].value;
   var email=document.forms["form"]["email"].value;
   //Если поле name пустое выведем сообщение и предотвратим отправку формы
   if (name.length==0 || email.length==0){
      document.getElementById("namef").innerHTML="*данное поле обязательно для заполнения";
      document.getElementById("emailf").innerHTML="*данное поле обязательно для заполнения";
      return false;
   }
}
/*------------------------form--------------------------*/
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
/*------------------------menu--------------------------*/
jQuery(document).ready(function($){
 
    /* Подготавливаем иконку меню */
    $('.nav-wrap').prepend('<div id="menu-icon"><i class="fa fa-compass" aria-hidden="true"></i><span>Menu</span></div>');
     
    /* Включаем навигацию */
    $("#menu-icon").on("click", function(){
        $(".nav").slideToggle();
        $(this).toggleClass("active");
    });

});
/*------------------------menu--------------------------*/
