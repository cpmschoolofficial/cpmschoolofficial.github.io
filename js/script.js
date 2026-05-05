// ================= MENU =================
<script>
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
</script>

// ================= STUDENT POPUP =================
function openStudent(el) {
  const popup = document.getElementById("studentPopup");
  if (!popup) return;

  popup.style.display = "flex";

  const name = document.getElementById("popupName");
  const dream = document.getElementById("popupDream");
  const story = document.getElementById("popupStory");
  const img = document.getElementById("popupImg");

  if (name) name.innerText = el.dataset.name || "";
  if (dream) dream.innerText = el.dataset.dream || "";
  if (story) story.innerText = el.dataset.story || "";
  if (img) img.src = el.dataset.img || "";
}

function closePopup() {
  const popup = document.getElementById("studentPopup");
  if (popup) {
    popup.style.display = "none";
  }
}

// ================= SLIDER =================
let index = 0;

function showSlide(i) {
  const slides = document.getElementById("slides");
  if (!slides) return;

  const total = slides.children.length;

  if (i >= total) index = 0;
  else if (i < 0) index = total - 1;
  else index = i;

  slides.style.transform = "translateX(" + (-index * 100) + "%)";
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

// AUTO SLIDE (only if slider exists)
setInterval(() => {
  const slides = document.getElementById("slides");
  if (slides) {
    nextSlide();
  }
}, 4000);

// ================= SCROLL ANIMATION =================
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".animate");
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("show");
    }
  });
});
<script>
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
</script>
