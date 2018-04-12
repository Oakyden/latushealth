function openNav() {
  //  document.getElementById("mySidenav").style.width = "30vw";
    $(".menu-overlay").removeClass("display-none");

    if(screen.width > 530){
      $(".menuButton").animate({right: '29%'}, 1000 );
      $("#mySidenav").animate({width: '30vw'}, 1000 );
    }else{
      $(".menuButton").animate({right: '80%'}, 1000 );
      $("#mySidenav").animate({width: '100vw'}, 1000 );
    }
}

function closeNav() {
  //  document.getElementById("mySidenav").style.width = "0";

    $(".menuButton").animate({right: '7%'}, 1000 );
    $("#mySidenav").animate({width: '0vw'}, 1000 );


    setTimeout(function(){
      $(".menu-overlay").addClass("display-none");
    },1000);
}
