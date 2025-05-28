
/* Switch between showing and hiding the navigation menu links when user clicks on the hamburger menu */
function myFunction() {
    var x = document.getElementsByClassName("mobile-nav")[0];
    console.log(x);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Selecteer het HTML-element dat je wilt laten verdwijnen
const element =document.getElementsByClassName("mobile-nav")[0];


// Definieer een media query (bijvoorbeeld voor max 768px breed)
const mediaQuery = window.matchMedia('(max-width: 650px)');

// Functie om te bepalen of het element zichtbaar moet zijn
function checkScreenSize(e) {
  if (!e.matches) {
    // Scherm kleiner of gelijk aan 768px: element verbergen
    element.style.display = 'none';
  }
}

// Voer de check meteen uit bij laden
checkScreenSize(mediaQuery);

// Luister naar veranderingen in schermgrootte
mediaQuery.addEventListener('change', checkScreenSize);
