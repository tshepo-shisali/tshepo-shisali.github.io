// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Freeze the SafeMate map animation for people who prefer less motion
if (reduceMotion) {
  document.querySelectorAll('svg.map').forEach((svg) => svg.pauseAnimations && svg.pauseAnimations());
}

// Fill the timeline line as you scroll through the three apps
const story = document.querySelector('.story');
if (story) {
  let ticking = false;
  const update = () => {
    const rect = story.getBoundingClientRect();
    const focus = window.innerHeight * 0.6;
    const p = Math.min(1, Math.max(0, (focus - rect.top) / rect.height));
    story.style.setProperty('--p', reduceMotion ? 1 : p.toFixed(3));
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
}
