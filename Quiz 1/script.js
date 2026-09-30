document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }

  const images = document.querySelectorAll(".food-list img, .tourist-list img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  const backToTop = document.getElementById("back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});