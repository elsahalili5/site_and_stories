// Elsa

// window.addEventListener("load", function () {
//   document.body.innerHTML += `
//     <div id="title-wrapper" class="title-wrapper">
//       <h1 class="loading-page-title">DARK HERITAGE IN KOSOVO</h1>
//     </div>
//   `;

//   setTimeout(function () {
//     const pageContentWrapper = document.getElementById("page-content");
//     const titleWrapper = document.getElementById("title-wrapper");
//     titleWrapper.remove();
//     if (pageContentWrapper) {
//       pageContentWrapper.style.display = "block";
//     }
//   }, 1500);
// });

//permes kesaj pjese k=te kodit e largojme titullin qe shfaqet sapo hapet faqja "dark heritage of kosovo" dhe e shfaqim
// permbajtjen mbas 1.5 sekondave
window.addEventListener("load", function () {
  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("title-wrapper");
  titleWrapper.id = "title-wrapper";
  //krijojme nje div e ruajme ne variablen titleWrapper i shtojme klasen dhe id "title-wrapper"
  const title = document.createElement("h1");
  title.classList.add("loading-page-title");
  title.innerText = "DARK HERITAGE IN KOSOVO";
  // krijojme nje h1 e ruajme ne variablen title i shtojme klasen "loading-page-title" edhe kontentin "dark heritage in kosovo"
  titleWrapper.appendChild(title);
  // div-it te krijuar me heret i shtojme title dmth h1
  document.body.appendChild(titleWrapper);
  // edhe ne fund body-t ia shtojme titleWrapper divin me h1

  setTimeout(function () {
    const pageContentWrapper = document.getElementById("page-content");
    // e ruajme ne kete variabel permbajtjen e faqes
    const titleWrapper = document.getElementById("title-wrapper");
    titleWrapper.remove();
    // e heqim titleWrapper
    if (pageContentWrapper) {
      pageContentWrapper.style.display = "block";
    }
    // edhe e shfaqim permbajtjen
  }, 1500);
});
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebarItems = document.getElementById("sidebar-items");
const sidebar = document.getElementById("sidebar");
const hamburgerIcon = document.getElementById("h-icon");
const removeIcon = document.getElementById("remove-icon");

document.addEventListener("DOMContentLoaded", function openMenu() {
  // kur klikojme ne hamburgermenu me u shfaq sidebar items
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", () => {
      if (sidebar.classList.contains("darker-sidebar")) {
        sidebarItems.classList.remove("sidebar-items-show");
        sidebar.classList.remove("darker-sidebar");
        removeIcon.style.display = "none";
        hamburgerIcon.style.display = "block";
      } else {
        hamburgerIcon.style.display = "none";
        sidebarItems.classList.add("sidebar-items-show");
        sidebar.classList.add("darker-sidebar");
        removeIcon.style.display = "block";
      }
    });
  }
});

const sidebarCities = document.querySelectorAll(".sidebar-cities li a");

sidebarCities.forEach((sidebarcity) => {
  sidebarcity.addEventListener("click", () => {
    sidebarItems.classList.remove("sidebar-items-show");

    const sidebarcityHref = sidebarcity.getAttribute("href").substring(1);
    const section = document.getElementById(sidebarcityHref);

    if (section) {
      const sections = document.querySelectorAll(".cases-wrapper");
      sections.forEach((section) => {
        section.classList.remove("show-cases");
      });

      section.classList.toggle("show-cases");
      hamburgerIcon.style.display = "block";
      sidebar.classList.remove("darker-sidebar");
      removeIcon.style.display = "none";
    }
  });
});
