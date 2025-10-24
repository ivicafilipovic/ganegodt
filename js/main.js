//under Construction Alert//
/*
Swal.fire({
title:'Willkommen bei Ganegodt',
html:`<img src="./assets/icons/Design_ohne_Titel_Logos_ohne_Hintergrund.png"
          alt="GanegodtLog"
          style="width:120px; height:120px  margin-bottom:1rem">
           <p>Diese Website ist aktuell noch im Aufbau.</p>
    <p>Folge mir auf Instagram 💛</p>`,
confirmButtonText: 'Verstanden',
confirmButtonColor: '#e73c7e',
})*/



///////Gridrezepte//////
//Damit man nur die Zahl bei data-skill ändern kann und dann wird die Anzahl Bilder veränder
var skillContainer = $(".rezeptSkills"); //
skillContainer.each(function () {
  // "each"wird für jedes Element mit dem Element in der definieren Variable ausgeführt
  var skillLevel = $(this).data("skill"); //"this" wird nur auf dieses Element angwendet
  var iconsContainer = $(this).find(".skillIcons");

  for (var i = 0; i < skillLevel; i++) {
    var img = $("<img>", {
      src: "../assets/icons/chefSVG.svg",
      alt: "Female Chef",
      class: "skillImg",
    });
    iconsContainer.append(img);
  }
});

///////Footer///////
//SocialMediaFooter//
var icon = $(".fa-brands, .fa-square-envelope");
icon.on("mouseenter", function () {
  $(this).addClass("fa-bounce");
});
icon.on("mouseleave", function () {
  $(this).removeClass("fa-bounce");
});

//Logo Beat Fade Animation//
//document.ready heisst erst Function ausführen wenn ganzes HTML geladen wird
$(document).ready(function () {
  //
  $(".footerLogo").on("mouseenter", function () {
    $(this).addClass("bounce");
  });
  $(".footerLogo").on("mouseleave", function () {
    $(this).removeCLass("bounce");
  });
});

//Damit die Animation bei jedem Hover neu startet//
$(".footerLogo").on("mouseenter", function () {
  var logbounce = $(this);
  logbounce.removeClass("bounce"); //Alte Animatoon entfernen
  void logbounce[0].offsetWidth; // Reflow erzwingen
  logbounce.addClass("bounce"); //Animation starten
});

///////Smooth Fade In Animation///////

var observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');// CSS Show wird hinzugefügt
      observer.unobserve(entry.target)
    }
  });
});


var hiddenElements = document.querySelectorAll('.fade-in'); // fade inn wird erstellt
hiddenElements.forEach((element)=>observer.observe(element));




