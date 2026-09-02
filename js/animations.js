/* ==========================================================================
   ARCHITECTURE INTERIOR DESIGN — ANIMATION & SCROLL OBSERVER MODULE
   ========================================================================== */

let revealObserver;

function initAnimations() {
  // Intersection Observer for Scroll Reveals
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };
  
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        // If element is a stat counter, animate it
        if (entry.target.classList.contains('stat-counter') && !entry.target.dataset.counted) {
          animateCounter(entry.target);
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  observeRevealElements();
  
  // Parallax on Hero Image on scroll
  const heroImg = document.querySelector('.hero-bg-img');
  if (heroImg && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        heroImg.style.transform = `translateY(${scrolled * 0.22}px) scale(1.02)`;
      }
    }, { passive: true });
  }
}

function observeRevealElements() {
  const elements = document.querySelectorAll('.reveal:not(.is-revealed)');
  elements.forEach(el => {
    if (revealObserver) {
      revealObserver.observe(el);
    } else {
      el.classList.add('is-revealed');
    }
  });
}

// Number Counter Animation
function animateCounter(el) {
  el.dataset.counted = 'true';
  const target = parseFloat(el.getAttribute('data-target'));
  const isDecimal = el.getAttribute('data-decimal') === 'true';
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1800;
  const startTime = performance.now();
  
  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out expo curve
    const easeProgress = 1 - Math.pow(2, -10 * progress);
    const currentVal = target * easeProgress;
    
    if (isDecimal) {
      el.textContent = currentVal.toFixed(1) + suffix;
    } else {
      el.textContent = Math.floor(currentVal) + suffix;
    }
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
    }
  }
  
  requestAnimationFrame(updateNumber);
}

// Global hook for dynamic additions (e.g. portfolio items filter)
window.triggerScrollObserver = function() {
  setTimeout(() => {
    observeRevealElements();
  }, 50);
};

window.initAnimations = initAnimations;
