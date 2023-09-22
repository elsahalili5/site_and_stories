window.addEventListener("load", function () {
  document.body.innerHTML += `
    <div id="title-wrapper" class="title-wrapper">
      <h1 class="loading-page-title">DARK HERITAGE IN KOSOVO</h1>
    </div>
  `;

  setTimeout(function () {
    const pageContentWrapper = document.getElementById("page-content");
    const titleWrapper = document.getElementById("title-wrapper");

    titleWrapper.remove();

    if (pageContentWrapper) {
      pageContentWrapper.style.display = "block";
    }
  }, 1500);
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const sidebarItems = document.getElementById("sidebar-items");
  console.log(hamburgerMenu);

  hamburgerMenu.onclick = function () {
    sidebarItems.classList.toggle("left");
    sidebarItems.classList.toggle("darker-sidebar");
  };
});
