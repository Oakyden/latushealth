var titles = ["Latus Health","Groupe Atlantic","Pepperells", "MKM"];

var descriptions = [
"Occupational Health",
"Ergonomic Assessment, Manual Handling, Safety Induction Video & Office Wellbeing",
"Employee Resilience & Wellbeing",
"Director performance, Health Checks and group exercise sessions"];

var logos = [
  "assets/images/logos/latuslogo.png",
  "assets/images/logos/groupeatlantic.png",
  "assets/images/logos/pepperells.png",
  "assets/images/logos/mkm.png"
];

var heroImages = [
  "assets/images/officeworker.jpg",
  "assets/images/groupe-atlantic-recrute.jpg",
  "assets/images/pepperells-hero.jpg",
  "assets/images/mkm-staff.jpg"
];

var heroAnimations = [
"assets/images/animated/doctor.gif",
"assets/images/animated/air-conditioner.gif",
"assets/images/animated/businessman.gif",
"assets/images/animated/builder.gif"

];

var backgroundColours = [
    "rgba(188, 32, 32, 1)",
  "rgba(98, 65, 244, 1)",
  "rgba(231, 208, 37, 1)",
    "rgba(34, 129, 255, 1)"
];


var changeHero = function() {
  var i = 0;

  // store the interval id to clear in future
  var intr = setInterval(function changeImg() {

    $('.large-hero__title').addClass('animated fadeOutLeft');
    $('.large-hero__description').addClass('animated fadeOutRight');
    $('.large-hero__animated').addClass('animated fadeOutDown');

    $('.large-hero__translucent').css("background-color", backgroundColours[i]);

    console.log(backgroundColours[i]);

    setTimeout(function(){
          $('.headerImgWrapper > img, .large-hero__backing-text').addClass('animated fadeOutLeft');
      },200);

    setTimeout(function(){
    document.getElementsByClassName("large-hero__backing-text")[0].innerHTML = titles[i];
    document.getElementsByClassName("large-hero__description")[0].innerHTML = descriptions[i];
    document.getElementsByClassName("large-hero__title")[0].src = logos[i];
    document.getElementsByClassName("large-hero__image")[0].src = heroImages[i];
    document.getElementsByClassName("large-hero__animated")[0].src = heroAnimations[i];

    $('.headerImgWrapper > img, .large-hero__backing-text').removeClass('animated fadeOutLeft').css("display","none");
    $('.large-hero__title').removeClass('animated fadeOutLeft').css("display","none");
    $('.large-hero__description').removeClass('animated fadeOutRight').css("display","none");
    $('.large-hero__animated').removeClass('animated fadeOutDown').css("display","none");


        setTimeout(function(){
          $('.headerImgWrapper > img, .large-hero__backing-text').addClass('animated fadeInRight').css("display","block");
          if(screen.width < 530){
          $('.large-hero__backing-text').css("display","none");
          }
        },10);

        setTimeout(function(){
          $('.large-hero__title').addClass('animated fadeInRight').css("display","block");
          $('.large-hero__animated').addClass('animated fadeInUp').css("display","block");

          if(i===1){
            $('.large-hero__animated').addClass('animated-margin');
            console.log("i think its 1");
          }else{
            $('.large-hero__animated').removeClass('animated-margin');
            console.log("i");
          };

        },300);

        setTimeout(function(){
          $('.large-hero__description').addClass('animated fadeInLeft').css("display","block");

        },300);

  },1000);
    // clear the interval if `i` reached 100
    if (++i == 4) { i=0};
  }, 4000)

};

changeHero();
