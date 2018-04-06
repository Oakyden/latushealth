function openNav() {
  //  document.getElementById("mySidenav").style.width = "30vw";
    $(".menu-overlay").removeClass("display-none");
    $(".menuButton").css("right", "29%");
}

function closeNav() {
  //  document.getElementById("mySidenav").style.width = "0";
    $(".menu-overlay").addClass("display-none");
    $(".menuButton").css("right", "7%");
}
