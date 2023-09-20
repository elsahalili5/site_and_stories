function openMenu() {
  var menu = document.getElementById("myLinks");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
window.addEventListener("load", function () {
  var title = document.getElementById("title-wrapper");
  var pageContent = document.getElementById("page-content");

  setTimeout(function () {
    if (title) {
      title.style.display = "none";
    }
    if (pageContent) {
      pageContent.style.display = "block";
    }
  }, 1500);
});
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Change slides automatically every 2 seconds (adjust as needed)
}
