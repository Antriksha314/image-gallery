const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const galleryImages = document.querySelectorAll(".gallery-img");
let currentSelected = 0;

prevButton.addEventListener("click", function () {
  nextButton.removeAttribute("disabled");
  galleryImages[currentSelected].classList.remove("active");
  currentSelected--;
  galleryImages[currentSelected].classList.add("active");
  if (currentSelected === 0) {
    prevButton.setAttribute("disabled", true);
  }
});

nextButton.addEventListener("click", function () {
  prevButton.removeAttribute("disabled");
  galleryImages[currentSelected].classList.remove("active");
  currentSelected++;
  galleryImages[currentSelected].classList.add("active");
  if (currentSelected === galleryImages.length - 1) {
    nextButton.setAttribute("disabled", true);
  }
});
