// Elsa
//permes ketij funksioni showSlides e krijoj nje galeri sllajdesh qe ndrrohen automatikisht pas cdo 6 sekonda)

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // i marim te gjitha elementet qe e kane klasen slide edhe e bejme display none
  }

  slideIndex++;
  // e rrisim vleren e slideindex me kalu ne sllajdin tjeter
  if (slideIndex > slides.length) {
    slideIndex = 1;
    // e kontrollojme nese slideIndex e ka kaluar  numrin e total të slajdeve dmth nese indeksi rritet meshume se
    // 1 atehere slideindeksin e resetojme perseri ne 1 fillojme perseri prej sllajdit te par  sepse i kemi vetem dy slides
    //  qe i bie me qene indeksat vetem 0 dhe 1
  }

  slides[slideIndex - 1].style.display = "block";
  // sllajdin aktual e bejme te dukshem
  setTimeout(showSlides, 6000);
}

// // i marrim te gjitha elementet me klasen city i shtojm ni event listener per secilin prej tyne  kur njeri prej tyre klikohet
// e fshijme klasen show-cases dmth e shikojme nese kemi ndonje casewrappper qe e ka kete klas para se ti shtojme klasen show-cases ne elementin qe eshte klikuar
// ne menyre qe vetem nje casewrapper me qene hap per momentin

const cities = document.querySelectorAll(".city");
cities.forEach((city, index) => {
  city.addEventListener("click", () => {
    const casesWrappers = document.querySelectorAll(".cases-wrapper");
    const casesWrapper = casesWrappers[index];
    const prevCase = document.querySelector(".show-cases");
    const clickedCase = document.querySelector(".cases-wrapper.show-cases");

    if (prevCase) {
      prevCase.classList.remove("show-cases");
    }

    // casesWrappers.forEach((element) => {
    //   element.classList.remove("show-cases");
    // });
    casesWrapper.classList.toggle("show-cases");

    if (clickedCase) {
      clickedCase.classList.remove("show-cases");
    }
  });
});
