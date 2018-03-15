var titles = ["Latus Health","Groupe Atlantic","Pepperells Solicitors", "MKM"];

var descriptions = [
"Helping you improve the health of every employee",
"Ergonomic Assessment, Manual Handling, Safety Induction Video & Office Wellbeing",
"Employee Resilience & Wellbeing",
"Director performance, Health Checks and group exercise sessions"];

var logos = [
  "assets/images/logos/latuslogo.png",
  "assets/images/logos/groupeatlantic.png",
  "assets/images/logos/pepperells.png",
  "assets/images/logos/mkm.jpg"
];

var heroImages = [
  "assets/images/officeworker.jpg",
  "assets/images/groupe-atlantic-recrute.jpg",
  "assets/images/pepperells-hero.jpg",
  "assets/images/mkm-staff.jpg"
];



var changeHero = function() {
  var i = 1;
  // store the interval id to clear in future
  var intr = setInterval(function() {
    document.getElementsByClassName("large-hero__backing-text")[0].innerHTML = titles[i];
    document.getElementsByClassName("large-hero__description")[0].innerHTML = descriptions[i];
    document.getElementsByClassName("large-hero__title")[0].src = logos[i];
    document.getElementsByClassName("large-hero__image")[0].src = heroImages[i];
    // clear the interval if `i` reached 100
    if (++i == 4) { i=0};
  }, 4000)

}

changeHero();
