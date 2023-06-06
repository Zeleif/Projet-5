const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById("banner");
const dotsContainer = document.querySelector(".dots");
let currentSlide = 0;

// Fonction pour afficher les slides
function showSlide(index) {
  // Vérifier si l'index est valide
  if (index < 0 || index >= slides.length) {
    return;
  }

  // Récupérer l'élément de la slide courante
  const currentSlideElement = document.querySelector(".slide.active");
  if (currentSlideElement) {
    currentSlideElement.classList.remove("active");
  }

  // Récupérer les informations de la slide
  const slide = slides[index];

  // Créer un nouvel élément de slide
  const newSlideElement = document.createElement("div");
  newSlideElement.classList.add("slide");
  newSlideElement.innerHTML = `
    <img src="./assets/images/slideshow/${slide.image}" alt="Slide">
    <p>${slide.tagLine}</p>
  `;

  // Ajouter la classe active à la nouvelle slide
  newSlideElement.classList.add("active");

  // Ajouter la nouvelle slide à la bannière
  banner.appendChild(newSlideElement);

  // Mettre à jour l'index de la slide courante
  currentSlide = index;

  // Mettre à jour les dots
  updateDots();
}

// Fonction pour mettre à jour les dots
function updateDots() {
  const dotElements = dotsContainer.querySelectorAll(".dot");
  dotElements.forEach((dotElement, index) => {
    if (index === currentSlide) {
      dotElement.classList.add("active");
    } else {
      dotElement.classList.remove("active");
    }
  });
}

// Fonction pour passer à la slide suivante
function nextSlide() {
  const nextSlideIndex = currentSlide + 1;
  if (nextSlideIndex >= slides.length) {
    // Si on atteint la fin des slides, retourner à la première slide
    showSlide(0);
  } else {
    showSlide(nextSlideIndex);
  }
}

// Fonction pour passer à la slide précédente
function prevSlide() {
  const prevSlideIndex = currentSlide - 1;
  if (prevSlideIndex < 0) {
    // Si on est à la première slide, passer à la dernière slide
    showSlide(slides.length - 1);
  } else {
    showSlide(prevSlideIndex);
  }
}

// Créer les dots
slides.forEach((slide, index) => {
  const dotElement = document.createElement("span");
  dotElement.classList.add("dot");
  dotElement.addEventListener("click", () => {
    showSlide(index);
  });
  dotsContainer.appendChild(dotElement);
});

// Afficher la première slide
showSlide(0);

// Ajouter les écouteurs d'événements pour les flèches
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
prevArrow.addEventListener("click", prevSlide);
nextArrow.addEventListener("click", nextSlide);
