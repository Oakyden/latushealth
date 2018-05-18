$("document").ready(function(){
        $("#contact__contact-us").click(function(e){
          $('.contact__img-one').css("background-image", "url('/assets/images/contactUs.jpg')");
            $("#contact__form-container").removeClass("display-none");
            $("#contact__phone-container").addClass("display-none");
            $("#contact__social-container").addClass("display-none");
            $("#contact__map-container").addClass("display-none");
            $("#contact__map").addClass("display-none");
            e.preventDefault();
        });

        $("#contact__call-us").click(function(e){
          $('.contact__img-one').css("background-image", "url('/assets/images/contactUs.jpg')");
            $("#contact__phone-container").removeClass("display-none");
            $("#contact__form-container").addClass("display-none");
            $("#contact__social-container").addClass("display-none");
            $("#contact__map-container").addClass("display-none");
            $("#contact__map").addClass("display-none");
            e.preventDefault();
        });

        $("#contact__find-us").click(function(e){
            $("#contact__map-container").removeClass("display-none");
            $("#contact__map").removeClass("display-none");
            $("#contact__form-container").addClass("display-none");
            $("#contact__phone-container").addClass("display-none");
            $("#contact__social-container").addClass("display-none");
            e.preventDefault();
        });

        $("#contact__social-media").click(function(e){
          $('.contact__img-one').css("background-image", "url('/assets/images/contactUs.jpg')");
            $("#contact__social-container").removeClass("display-none");
            $("#contact__form-container").addClass("display-none");
            $("#contact__phone-container").addClass("display-none");
            $("#contact__map-container").addClass("display-none");
            $("#contact__map").addClass("display-none");
            
            e.preventDefault();
        });


    });
