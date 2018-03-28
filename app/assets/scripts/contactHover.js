$("document").ready(function(){
        $("#contact__contact-us").click(function(){
          $('.contact__img-one').css("background-image", "url('/assets/images/contactUs.jpg')");
            $("#contact__form-container").removeClass("display-none");
            $("#contact__phone-container").addClass("display-none");
            $("#contact__social-container").addClass("display-none");
        });

        $("#contact__call-us").click(function(){
          $('.contact__img-one').css("background-image", "url('/assets/images/contactUs.jpg')");
            $("#contact__phone-container").removeClass("display-none");
            $("#contact__form-container").addClass("display-none");
            $("#contact__social-container").addClass("display-none");
        });

        $("#contact__find-us").click(function(){
            $('.contact__img-one').css("background-image", "url('/assets/images/dunston-house.png')");
            $("#contact__form-container").addClass("display-none");
            $("#contact__phone-container").addClass("display-none");
            $("#contact__social-container").addClass("display-none");
        });

        $("#contact__social-media").click(function(){
          $('.contact__img-one').css("background-image", "url('/assets/images/contactUs.jpg')");
            $("#contact__social-container").removeClass("display-none");
            $("#contact__form-container").addClass("display-none");
            $("#contact__phone-container").addClass("display-none");
        });


    });
