
// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Typing effect in modal
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = "block";
  const p = modal.querySelector("p");
  const fullText = p.innerText;
  p.innerText = "";
  let i = 0;
  const typing = setInterval(() => {
    if (i < fullText.length) {
      p.innerText += fullText.charAt(i++);
    } else {
      clearInterval(typing);
    }
  }, 20);
}

// Close modal
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
window.onclick = function(e) {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};

const images = [
  "assets/images/rendus/bot22.png",
  "assets/images/rendus/btei.png",
  "assets/images/rendus/cadeau.png",
  "assets/images/rendus/cadeaun.png",
  "assets/images/rendus/carrefour.png",
  "assets/images/rendus/croix.png",
  "assets/images/rendus/loupe.png",
  "assets/images/rendus/tab_chaise.png",
  "assets/images/rendus/terrasse.png",
  "assets/images/rendus/ven_vin.png",
  "assets/images/rendus/verre.png",
  "assets/images/rendus/vin lunette.png",  
  "assets/images/rendus/vin_unette_venti.png",
];
let currentImageIndex = 0;

function openCarouselModal() {
  currentImageIndex = 0;
  document.getElementById("carouselImage").src = images[currentImageIndex];
  document.getElementById("carouselModal").style.display = "block";
}

function closeCarouselModal() {
  document.getElementById("proj6-r").style.display = "none";
}

function nextSlide() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById("carouselImage").src = images[currentImageIndex];
}

function prevSlide() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById("carouselImage").src = images[currentImageIndex];
}

// 🔁 Carrousel vidéo
const videos = [
  "assets/animation/aniversaire_y.mkv",
  "assets/animation/feux_artifice.mkv",
  "assets/animation/si.mkv"
];
let currentVideoIndex = 0;

function openVideoCarouselModal() {
  currentVideoIndex = 0;
  loadVideo(currentVideoIndex);
  document.getElementById("videoCarouselModal").style.display = "block";
}

function closeVideoCarouselModal() {
  const videoEl = document.getElementById("carouselVideo");
  videoEl.pause();
  document.getElementById("proj6-v").style.display = "none";
}

function loadVideo(index) {
  const videoEl = document.getElementById("carouselVideo");
  videoEl.pause();
  const sourceEl = videoEl.querySelector("source");
  sourceEl.src = videos[index];
  videoEl.load();
  videoEl.play();
}

function nextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  loadVideo(currentVideoIndex);
}

function prevVideo() {
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  loadVideo(currentVideoIndex);
}

// Loader
window.onload = () => {  

  // Loader
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
    document.body.classList.remove("no-scroll");
  }, 2000);
  
  const p = document.querySelector(".hero p");
  const fullText = p.innerText;
  p.innerText = "";
  let i = 0;
  const typing = setInterval(() => {
    if (i < fullText.length) {
      p.innerText += fullText.charAt(i++);
    } else {
      clearInterval(typing);
    }
  }, 40);

  
};