
$( document ).ready(function() {
    console.log( "Jquery ready!" );

     $.ajax({
         url: "/data.json",
         dataType: "json",
         success: function (data){
              siteData(data);
         },
         error: function (error){
               console.log('failed...');
               console.log(error);
               var data = null;
          }
     });
    function siteData(data){
         setTimeout(function () {
             console.log(data);
         }, 200);
    }
    setTimeout(function(){
      $('.headline').removeClass('hide').addClass('slideInDown animated');

    }, 500);
   setTimeout(function(){
      $('.headline').addClass('shrink').slow(400); 
   }, 5000);

    $('body').on('click', '.hamburger', function(){
        $(this).toggleClass('is-active');
        $('.nav, .nav-home').toggleClass('slideInRight hide');
        // $('.hamburger-inner').toggleClass('active');

    });
    $(document).on('scroll', function(){
        var stickyHeader = $('html, body').scrollTop();
        if (stickyHeader >= 100) {
            console.log('reached 100px ');
            $('.hamburger-container').addClass('sticky');
        } else { $('.hamburger-container').removeClass('sticky'); }
    });

    $('body').on('click', '.test-data', function(){
        console.log('clicked testing...');
        $.ajax({
            url: "/data.json",
            dataType: "json",
            success: function (data){
                var data = data;
            },
            error: function (error){
                  console.log('failed...');
                 console.log(error);
                  var data = null;
             }
        });
    });


});
