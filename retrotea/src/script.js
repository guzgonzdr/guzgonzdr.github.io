// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");
const header = document.querySelector("header");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Hide header on scroll down, show on scroll up, and toggle transparency
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add("hide"); // scrolling down
  } else {
    header.classList.remove("hide"); // scrolling up
  }
  lastScrollY = window.scrollY;

  // Toggle transparent/solid styles
  if (window.scrollY > 50) {
    header.classList.remove("transparent");
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
    header.classList.add("transparent");
  }
});