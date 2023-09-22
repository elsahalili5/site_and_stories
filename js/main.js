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

window.addEventListener("load", function () {
  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("title-wrapper");
  titleWrapper.id = "title-wrapper";

  const title = document.createElement("h1");
  title.classList.add("loading-page-title");
  title.innerText = "DARK HERITAGE IN KOSOVO";

  titleWrapper.appendChild(title);
  document.body.appendChild(titleWrapper);

  setTimeout(function () {
    const pageContentWrapper = document.getElementById("page-content");
    const titleWrapper = document.getElementById("title-wrapper");
    titleWrapper.remove();
    if (pageContentWrapper) {
      pageContentWrapper.style.display = "block";
    }
  }, 1500);
});
