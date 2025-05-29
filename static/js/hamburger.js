
/* Navigatie menu wel/niet laten zien wanneer de user op het hamburger menu klikt */
function myFunction() {
    var x = document.getElementsByClassName("mobile-nav")[0];
    console.log(x);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Het HTML-element dat ik wil laten verdwijnen
const element =document.getElementsByClassName("mobile-nav")[0];
const mediaQuery = window.matchMedia('(max-width: 650px)');

// Functie om te bepalen of het element zichtbaar moet zijn
function checkScreenSize(e) {
  if (!e.matches) {
    element.style.display = 'none';
  }
}

checkScreenSize(mediaQuery);

// Kijkt of schermgrootte verandert
mediaQuery.addEventListener('change', checkScreenSize);
