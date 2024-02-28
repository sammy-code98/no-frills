console.log("framework...");

window.onload = function () {
  const harmburgerBtn = document.querySelector(".harmburger-btn");
  const navMenu = document.querySelector("#menu");

  harmburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });
};
