
$( document ).ready(function() {
    console.log( "jQuery ready!" );

     $.ajax({
         url: "../assets/creativeautomaton.json",
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
    function heroAnimation(){
          $('.call-to-action').hide().removeClass('hide');

          setTimeout(function(){
             $('.logo').removeClass('hide').addClass('three-sec slideInDown animated');
             $(".title").each(function (index) {
                 var characters = $(this).text().split("");
                 $this = $(this);
                 $this.empty();
                 $.each(characters, function (i, el) {
                    $this.append("<p class='slideInLeft animated'>" + el + "</p>");
                 });
                  console.log(characters);
             });
             $('.title p').each(function() {
                $(this).hide();
                var letterVal = $(this).text();
                if(letterVal == " "){
                    $(this).css({'margin-left': '2rem'});
                }
             });
          }, 1000);

          $('.title').removeClass('hide');
          $('#hero .container').addClass('done');
          $('.title p').each(function() {
                 var time = 4;
                 $(this).delay(500 * time).show(1000);
          });
         setTimeout(function(){
              $('.call-to-action').delay(1500).show(500);
              $('.hire-us').delay(500).show(1000);
              $('.join-us').delay(500).show(1000);
         }, 10000);
    }
    function heroStatic(){
         $('.call-to-action').hide().removeClass('hide');
         $('.logo').removeClass('hide');
         $('.title').removeClass('hide');
         $('#hero .container').addClass('done');

         var heroTitles = $('.title h2').length;
         var titleNumber = Math.floor(Math.random() * heroTitles);

         $('.title h2').hide().eq(titleNumber).show();
         $('.title p').hide().eq(titleNumber).show();

          console.log(titleNumber, heroTitles);

         $('.call-to-action').delay(1500).show(500);
         $('.hire-us').delay(500).show(1000);
         $('.join-us').delay(500).show(1000);

    }

    var heroVal = localStorage.getItem("heroanimation");
    if (heroVal == null || heroVal === false){
        localStorage.setItem("heroanimation", "false");
        heroAnimation();
        console.log('called  heroAnimation');
    }
    if(heroVal !== "false") {
        localStorage.setItem("heroanimation", "true");
        heroStatic();
        console.log('called  heroStatic');
    }

      $('.panel').on({
          mouseenter: function () {
              //stuff to do on mouse enter
               $('span.fa-stack', this).addClass('bounce');
               $('.get-quote', this).addClass('pulse').removeClass('btn-primary').addClass('btn-danger');
               $('.bg-image', this).addClass('pan-bg');
          },
          mouseleave: function () {
              //stuff to do on mouse leave
              $('span.fa-stack', this).removeClass('bounce');
              $('.get-quote', this).addClass('btn-primary').removeClass('btn-danger pulse');
              $('.bg-image', this).removeClass('pan-bg');
          }
      });

    // $(document).html().replace('[at]', '@');


    $(document).on('scroll', function(){
        var stickyHeader = $('html, body').scrollTop();
        if (stickyHeader >= 100) {
            console.log('reached 100px ');
            $('.hamburger-container').addClass('sticky');
        } else { $('.hamburger-container').removeClass('sticky'); }

        var services = $('.service-panels').offset().top;
        console.log(services);
        if (stickyHeader = services) {
           console.log('reached service-panels');
           $('.service-panels .animated').removeClass('hide');
        }

         var portfolio = $('.portfolio').offset().top;
         console.log(portfolio);
         if (stickyHeader = portfolio) {
            console.log('reached portfolio');
            $('.portfolio .animated').removeClass('hide');
         }
    });



});
