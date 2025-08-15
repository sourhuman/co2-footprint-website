document.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("mainHeader");
  const hero = document.querySelector(".hero-video-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Hero sichtbar → transparent
          header.classList.remove("scrolled");
        } else {
          // Hero nicht mehr sichtbar → grün/schwarz
          header.classList.add("scrolled");
        }
      });
    },
    { threshold: 0.5 } // mindestens 50% sichtbar, damit es als "im Viewport" zählt
  );

  observer.observe(hero);
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('mainHeader');

  function updateHeaderOffset() {
    if (!header) return;
    const h = header.offsetHeight; // reale Höhe inkl. Umbruch
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }

  // initial + bei Resize/Rotation
  updateHeaderOffset();
  window.addEventListener('resize', updateHeaderOffset);
  window.addEventListener('orientationchange', updateHeaderOffset);

  // Falls deine globale Nav ein Collapse/Toggler hätte, so reagieren:
  // document.addEventListener('shown.bs.collapse', updateHeaderOffset);
  // document.addEventListener('hidden.bs.collapse', updateHeaderOffset);
});

document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;
  const sec3 = document.getElementById('abschnitt3');

  if (!sec3 || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      // Ist Abschnitt 3 "dominant" im Viewport? -> Snap aus
      if (e.isIntersecting && e.intersectionRatio >= 0.6) {
        htmlEl.classList.add('no-snap');
      } else {
        htmlEl.classList.remove('no-snap');
      }
    });
  }, { threshold: [0.6] });

  io.observe(sec3);
});
