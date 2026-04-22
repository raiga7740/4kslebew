/* ─── PARTICLES ──────────────────────────────────────────────── */
const isMobile = window.innerWidth < 768;

particlesJS("particles-js", {
  particles: {
    number: {
      value: isMobile ? 35 : 70,
      density: { enable: true, value_area: 1000 }
    },
    color: { value: "#ffffff" },
    opacity: {
      value: 0.18,
      random: true,
      anim: { enable: true, speed: 0.4, opacity_min: 0.05, sync: false }
    },
    size: {
      value: isMobile ? 1.5 : 2,
      random: true
    },
    move: {
      enable: true,
      speed: isMobile ? 0.3 : 0.5,
      direction: "none",
      random: true,
      out_mode: "out"
    },
    line_linked: { enable: false }
  },
  retina_detect: true
});

/* ─── NAV SCROLL ─────────────────────────────────────────────── */
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}, { passive: true });

/* ─── SCROLL REVEAL ──────────────────────────────────────────── */
const revealEls = document.querySelectorAll(
  ".stat-item, .feature-card"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
        const index = el.dataset.index ? parseInt(el.dataset.index) * 80 : 0;

        setTimeout(() => {
          el.classList.add("visible");
        }, delay || index);

        revealObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

/* ─── SMOOTH ANCHOR ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});