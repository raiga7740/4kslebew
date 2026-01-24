const isMobile = window.innerWidth < 768;

particlesJS("particles-js", {
  particles: {
    number: {
      value: isMobile ? 45 : 90,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: { value: "#ffffff" },
    opacity: {
      value: 0.25,
      random: true
    },
    size: {
      value: 2.5,
      random: true
    },
    move: {
      enable: true,
      speed: isMobile ? 0.4 : 0.6,
      direction: "none",
      out_mode: "out"
    },
    line_linked: { enable: false }
  },
  retina_detect: true
});
