
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