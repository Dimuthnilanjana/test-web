// animations.js
document.addEventListener('DOMContentLoaded', () => {
    gsap.from('nav', { y: -50, opacity: 0, duration: 0.8 });
    gsap.from('section', { opacity: 0, y: 30, duration: 0.8, stagger: 0.3 });
  });
  