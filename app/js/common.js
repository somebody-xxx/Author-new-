/*------------------------menu-------------------------*/
// Set options
    var options = {
        offset: '#showHere',
        offsetSide: 'top',
        classes: {
        clone:   'banner--clone',
        stick:   'banner--stick',
        unstick: 'banner--unstick'
    }
};

// Initialise with options
var banner = new Headhesive('.banner', options);

// Headhesive destroy
// banner.destroy();
/*------------------------menu-------------------------*/
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