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
