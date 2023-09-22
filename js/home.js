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

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const sidebarItems = document.getElementById("sidebar-items");
  const sidebar = document.getElementById("sidebar");

  if (hamburgerMenu) {
    console.log(hamburgerMenu);
    console.log(sidebarItems);
    console.log(sidebar);
    hamburgerMenu.addEventListener("click", () => {
      sidebarItems.classList.add("sidebar-items-show");
      sidebar.classList.add("darker-sidebar");
    });
  }
});
