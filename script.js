/* PARTICLES CONFIG — WHITE, SOFT, FLOATING */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#ffffff"
    },
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
      speed: 0.6,
      direction: "none",
      out_mode: "out"
    },
    line_linked: {
      enable: false
    }
  },
  interactivity: {
    events: {
      resize: true
    }
  },
  retina_detect: true
});

console.log("4K Sleeb loaded 🌒");
