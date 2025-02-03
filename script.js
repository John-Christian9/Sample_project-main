window.addEventListener("scroll", function () {
  let header = document.getElementById("main-header");
  let logo = document.getElementById("logo");
  
  if (window.scrollY > 50) {
      header.classList.add("scrolled");
      logo.src = "img/logo-black.png";  // Ensure this path is correct
  } else {
      header.classList.remove("scrolled");
      logo.src = "img/logo-white.png";  // Ensure this path is correct
  }
});
